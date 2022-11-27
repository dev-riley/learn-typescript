// function logMessage(value: string) {
//   console.log(value);
// }
// function logMessage(value: number) {
//   console.log(value);
// }
// function logMessage(value: any) {
//   console.log(value);
// }

// // # Union 타입 문법 - `any` 보다는 명시적임
// union type( | ): 하나 이상의 타입을 쓸 수 있게 해준다.

// function logMessage(value: string | number) {
//   console.log(value);
// }

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
// 인터페이스 두 가지를 union type으로 연결했을 때, 공통된 속성만 접근할 수 있다.
// (확실히 보장된 속성만 가능하게 함.) 
function askSomeone1(someone: Developer | Person) {
  // someone.name; // O
  // someone.age; // X
}
// 넘기는 타입에 대해 Developer or Person 선택지가 생김
askSomeone1({ name: '디벨로퍼', skill: '웹 개발'}); // Developer 속성만 접근 가능
askSomeone1({ name: '캡틴', age: 100 }); // Person 속성만 접근 가능

// intersection( & ) : 모든 속성에 접근할 수 있다.
// Developer와 Person의 타입을 모두 포함하는 someone이라는 새로운 타입을 만드는 것임.
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 50}) // Develper와 Person의 속성을 다 호출해야함.
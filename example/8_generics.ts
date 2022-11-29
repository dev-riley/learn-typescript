function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 같은 함수에 대해 두 가지 타입을 다 쓰고 싶을 때, 각 함수를 생성하거나 union type을 사용해야하는데
// 각 함수를 생성하는 것은 타입을 제외하면 모든 것이 중복되기 때문에 유지보수나 활용에 있어서 사용하기 힘들고, 
// union type을 사용하면 두 타입 모두 명확하지 않아서 함수들 예를 들어, string에만 쓸 수 있는 함수(split(), reverse() 등)들을 쓰지 못한다.
// 제네릭을 사용하면 이 문제가 해결

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 동일한 getValue 함수에 대해서 필요할 때 타입을 다르게 쓸 수 있다.
const str = getValue<string>('abc');
str.split('')
const login = getValue<boolean>(true);


// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 인터페이스에 제네릭을 선언하는 방법
// 1번 일반적으로 인터페이스 선언
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const boj: Dropdown = { value: 'abc', selected: false}

// 2번 인터페이스에 제네릭 선언
interface Dropdown<T> {
  value: T; // 아래 드롭다운 제네릭을 string으로 선언해서, value의 타입도 string이 됨.
  selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false};

// 제네릭 타입 제한 - 구체적인 타입
// function getNumberAndArray<T>(value: T): T {
//   value.length; // X
//   return value;
// }

// 제네릭의 타입 힌트를 조금 더 줄 수 있다.
// 제네릭의 타입을 배열로 선언해주면 함수 내에서 배열이라고 인식해 length나 forEach를 제공한다.
function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}
getNumberAndArray<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
// 상위에 정의된 인터페이스를 제네릭에 쓰고 싶을 때 extends를 사용하면 된다.
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a') // 기본적으로 string은 length를 제공하기 때문에 사용가능
logTextLength({ length: 10}); // 정의된 속성만 입력 가능

// 제네릭 타입 제한 3 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}

// keyof를 이용해서 제네릭의 타입을 ShoppingItems 중 하나로 설정할 수 있다.
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
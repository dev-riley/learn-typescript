function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// 위의 생성자 함수와 아래 클래스는 완전히 같다.

// 클래스 : 기본적으로 인스턴스를 만드는 것이 클래스의 역할
class Person {
  // 클래스 로직
  // constructor : 초기화 메서드
  constructor() {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var daye = new Person('다예', 50); // 생성 되었습니다.

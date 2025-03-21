// 1. 상수 객체
const animal = {
  type:"고양이",
  name:"나비",
  color:"black",
}

// animal = 123; ㅡ주소값을 통으로 바꾼 것이 안됨, 그 내에서 추가or수정or삭제는 가능

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메소드 속성
// => 속성의 값이 함수인 프로퍼티를 말한다.
const person = { // 메소드 속성 ㅡ person이 아닌 sayHi를 메소드 속성이라 부름
  name : "차은우",

  sayHi() { // person이라는 객체가 가지는 sayHi라는 메소드 속성
    console.log("은우가 인사함")
  }
}

person.sayHi(); // 
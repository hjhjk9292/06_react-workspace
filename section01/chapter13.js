// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "차은우",
  age : 20,
  hobby : "얼굴",
  job : "가수",
  extra : {},
  "like cat" : true,
}

// 3. 객체 프로퍼티(=속성)를 다루는 방법
// 3_1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"]; // 괄호표기법 시 [] 내에서 쌍따옴표 사용해서 string으로,,

console.log(name, age) // name에 그어진 부분 버전 차이

// 3_2. 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "마라탕";
console.log(person)

// 3_3. 기존의 프로퍼티를 수정하는 방법
person["age"] = 25;
console.log(person);

// 3_4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["hobby"];

console.log(person);

// 3_5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "zzzz" in person;

console.log(result1, result2)
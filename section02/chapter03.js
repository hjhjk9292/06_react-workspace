// 1. 배열의 구조 분해 할당

let arr = [1,2,3]; 

let [one, two, three, four=4] = arr; // 선언 후 four값 지정 안한 것을 이렇게 값 지정 가능

// console.log(one, two, three, four)

// 2. 객체의 구조 분해 할당
let person = {
  name : "차은우",
  age : 27,
  hobby : "얼굴"
}

// let name = person.name;
let { name, age, hobby, extra="hello" } = person; // extra="hello" 속성도 값도 없었지만 이렇게 추가 가능
// console.log(name, age, hobby, extra)

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name, age, hobby}) => {
  console.log(name, age, hobby)
}

func(person)
// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer에 해당하는 값

if(!f7){
  // console.log("falsy")
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {}

if(t3){
  // console.log("Truthy")
}

// 3. 활용사례
function printName(person){

  // if(person === undefined || person === null){ // 이런 조건을 간략하게 가능 ㄱ
  if(!person){
    console.log("person의 값이 없음"); // Cannot read properties of undefined (reading 'name') 해결하도록 추가 작성
    return;
  }
  console.log(person.name);
}

let person = {name : "차은우"}
// let person; // 어떤 문제가 생겼다고 가정! 
// let person = null; // 어떤 문제가 생겼다고 가정!
printName(person);

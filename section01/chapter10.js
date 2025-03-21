// 1. 함수 표현식으로 함수 생성
function funcA(){
  // console.log("funcA")
}

let varA = funcA;
// console.log(varA)

varA();
funcA();

// varB(); 익명함수로 만들면 호이스팅의 대상이 되지 않음

// 2. 익명함수로 함수 생성
let varB = function(){
  console.log("funcB");
}

varB();
// funcB(); 익명함수라서 안 됨

// 3. 화살표 함수
let varC = (value) => value + 1;

console.log(varC(10))
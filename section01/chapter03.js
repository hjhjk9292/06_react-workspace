// 1. Number 타입
let num1 = 20;
let num2 = 1.5;
let num3 = -20;

console.log("ㅎㅇ" % num2); // 모듈러 연산이라고 부른다.

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; 
// not a number = 숫자가 아니다.

// 2. String 타입
let myName = "은우";
let myLocation = "내맘속";
let introduce = myName + myLocation;

let introduceText = `${myName}는 ${myLocation}에 거주합니다.`
console.log(introduceText);

// 템플릿 리터럴 문법이라고 부름 백틱 쓰는거~ (``)

// 3. Boolean 타입
let isTrue = true;
let isFalse = false;

// 4. Null 타입 (아무것도 없다.)
let empty = null;

// 5. Undefined 타입
let und;
console.log(und); // 널과는 다르다. 널은 진짜 널을 넣어야함

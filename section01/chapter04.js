// 1. 묵시적 형변환
// 시키지도 않았는데, 알아서 되는거. 누가? 자바스크립트 엔진이

let num = 10;
let str = "20";

const result = num + str;
console.log(result)

// 2. 명시적 형변환
// 자동으로 안돼서 우리가 직접하는거
// 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1)

let str2 = "10개"; 
let strToNum2 = parseInt(str2); // 앞에 숫자로 시작해야됨 (총10개 안 됨)
console.log(strToNum2)

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1)
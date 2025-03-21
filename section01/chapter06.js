// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null이나 undefined 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 둘 다 값이 있을 때는 앞에 있는 거 들어감
console.log(var6) 

let userName;
let userNickName = "얼굴천재";
let displayName = userName ?? userNickName;
console.log(displayName) // ex. sns회원가입을 해서 name 없는데 nickname이 있을 경우 있는 값을 보여줌

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = true;
let t1 = typeof(var7);
console.log(t1)

// 3. 삼항연산자 ㅡ 리액트 시 많이 나온다..
// 조건 ? 참 : 거짓
let result = 10 % 2 === 0 ? "짝수" : "홀수";
console.log(result)
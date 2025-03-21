// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
// 더하고 빼고 곱하고 나누고 나머지 구하고 ㅡ 나머지 구하는 것은 모듈러 연산

// 3. 복합 대입 연산자 (산술이랑 대입이랑 섞인거)
let num7 = 10;
num7 += 20; // num7에 20을 더한 숫자
num7 -= 20;
console.log(num7)

// 4. 증감연산자
let num8 = 10;
num8++; // 후위연산, 전위연산도 있음!
console.log(num8)

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not)

// 6. 비교 연산자 ( == 값만 같은지 비교, === type까지도 비교)
let comp1 = 1 === "1";
let comp2 = 1 !== 2;
console.log(comp1, comp2)

let comp3 = 2 >= 1;
let comp4 = 2 <= 1;
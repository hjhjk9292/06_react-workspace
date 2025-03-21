// 1. 변수 선언 및 초기화
let age = 20;
console.log(age)

// 재할당
age = 30;

// 2. 상수
const birth = "1999.01.01";
// birth = "2005.01.01"; 재할당(값바꿈) 안됨

// 3. 변수 명명 규칙(네이밍 규칙)
// 3_1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3_2. 숫자로 시작할 수 없다.
let name1;
// let 2name; 

// 3_3. 예약어 안된다.
// let if;

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 2;
let total = salesCount - refundCount;
// 변수 명명시 의미없이 하지 말기
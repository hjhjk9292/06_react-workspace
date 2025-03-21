// 1. Date 객체를 생성하는 방법
let date1 = new Date();
// console.log(date1) // 오늘 날짜로 반환

let date2 = new Date("1999-01-01"); // 1999/01/01 도 가능
// console.log(date2) // 내가 원하는 특정 날짜로 만들어줌

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 협정세계시 UTC => 세계 모든 나라가 사용하는 시간이 시작되는 지점

let ts1 = date1.getTime();
// console.log(ts1)

let date4 = new Date(ts1);
// console.log(date4) // 국제 표준 시

// 복잡한 시간을 좀 간략하게 표기할 수 있다! 나중에 프젝할 때

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 년도만 추출
let month = date1.getMonth() + 1; // 자바스크립트의 월은 0부터 시작이라서 +1 해줘야함
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds)

// 4. 시간 수정하기
date1.setFullYear(2024); // 년도 변경하고 싶다
date1.setDate(15); // 일자 변경

// console.log(date1)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString())
console.log(date1.toLocaleString()) // 현지화된 형태로 출력됨 (2024. 3. 15. 오후 12:25:15)
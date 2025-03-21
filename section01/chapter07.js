// if문
let num = 9;

if(num >= 10){
  console.log("10보다 크거나 같음")
}else {
  console.log("조건이 거짓")
}

// 2. switch문
// 다수 조건 처리할 때 더 좋음

let animal = "snake";

switch(animal){
  case "cat" : console.log("야옹"); break;
  case "dog" : console.log("멍멍"); break;
  default : console.log("누구세요"); break;
}
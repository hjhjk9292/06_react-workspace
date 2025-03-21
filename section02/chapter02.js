// 단락 평가
function returnFalse(){
  console.log("False 함수")
  // return false;
  return undefined;
}

function returnTrue(){
  console.log("True 함수")
  // return true;
  return 10;
}

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() && returnFalse());
// console.log(returnTrue() || returnFalse());
// console.log(returnFalse() || returnTrue());

// 단락평가 활용 사례

// function printName(person){
//   if(!person){
//     console.log("person의 값이 없음");
//     return;
//   }

//   console.log(person.name);
// }  // if문을 간단하게 단락평가 활용 ㄱ

function printName(person){
  
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

// printName();
printName({name:"차은우"})

// T // T => 앞에꺼 반환
// T && T => 뒤에꺼 반환

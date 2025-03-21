// 1. 콜백 함수

function main(value){ // 매개변수
  value();
}

function sub(){
  console.log("나 서브야")
}

// main(sub); // 인자 => 이게 콜백함수!!

main(() => {
  console.log("나두 서브야");
});


// 2. 콜백함수의 활용
function repeat(count, callback){
  for(let idx = 1; idx <= count; idx++){
    callback(idx); // 콜백함수 내용 실행
  }
}


repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});


// function repeat(count, callback){
//   for(let idx = 1; idx <= count; idx++){
//     console.log(idx);
//   }
// }


// repeat(5, () => { // repeat(반복횟수, 콜백함수);

// }); 

// repeat(5, function(){ // repeat(반복횟수, 콜백함수);

// }); 

// function repeatDouble(count){
//   for(let idx = 1; idx <= count; idx++){
//     console.log(idx * 2);
//   }
// }


// function repeatTriple(count){ // repeatTriple(3) 호출
//   for(let idx = 1; idx <= count; idx++){
//     console.log(idx * 3);
//   }
// }


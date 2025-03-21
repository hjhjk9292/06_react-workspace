// Promise

const promise = new Promise((resolve, reject)=>{

  // resolve : 프로미스의 상태를 성공으로 바꿔주는 함수
  // reject : 프로미스의 상태를 실패로 바꿔주는 함수

  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(()=>{ // setTimeout(콜,시);
    // console.log("안녕");
    // resolve("할룽"); fullfilled 성공 상태로 바꿔준다
    // reject("왜 실패했을까요"); // rejected 실패 상태로 바꿔준다.
  },2000);

});

setTimeout(()=>{
  // console.log(promise)
}, 3000);

function add10(num){
  const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{

      if(typeof num === 'number'){
        resolve(num + 10);
      }else{
        reject("num이 숫자가 아닙니다.");
      }

    },2000)

  });

  return promise;
}

// add10(0).then((result)=>{ // add10(0).then(콜백함수)
//   console.log(result);
//   return add10(result);
// }).then((result)=>{
//   console.log(result);
//   return add10(result);
// }).then((result)=>{
//   console.log(result);
//   return add10(undefined)
// }).catch((error)=>{
//   console.log(error);
// })

// 음식 주문
function order(){
  
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const food = "마라탕";
      resolve(food);
    }, 3000);
  });

  return promise;

}

// 음식을 식히는 함수
function cool(food){

  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const collFood = `식은 ${food}`;
      resolve(collFood)
    }, 2000)
  });

  return promise; // promise는 만들고 return을 해줘야함

}

// 냉동시키는 함수
function ice(food){
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const iceFood = `${food}이 냉동되었습니다.`;
      resolve(iceFood);
    }, 1500);
  });

  return promise;

}


order().then((food)=>{
  console.log(food)
  return cool(food);
}).then((coolFood)=>{
  console.log(coolFood)
  return ice(coolFood)
}).then((iceFood)=>{
  console.log(iceFood);
})




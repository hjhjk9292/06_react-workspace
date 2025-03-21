function task(){
  setTimeout(()=>{
    console.log("안냥")
  }, 3000)
}

// task();

function add(a, b, callback){ // 매개변수로 받았다. // 1. 인자로 콜백함수를 받는다.
  setTimeout(() => {
    const sum = a + b;
    callback(sum) // sum이라는 인자로 넘긴다.
  }, 3000)
}

// 1. 인자로 콜백 2. 콜백함수 수행하며 sum을 밖으로 뺀다
// add(1,2, 콜백함수); // 인자로 넘긴다. (* 누가 나에게 줌 -> 인자 // 받음 -> 매개변수)

add(1,2, (value)=>{ // value라는 매개변수로 받았다. 
 // console.log(value)
}); // 인자로 넘긴다.

// 음식을 주문하는 함수
function order(callback){
  setTimeout(()=>{ //   setTimeout(콜,시)
    const food = "마라탕";
    callback(food);
  },3000)
}

// 음식을 식히는 함수
function cool(food, callback){ 
  setTimeout(()=>{
    const coolFood = `식은${food}`;
    callback(coolFood)
  },2000)
}

// 음식을 냉동하는 함수
function ice(food, callback){
  setTimeout(()=>{
    const iceFood = `${food}이 냉동되었습니다.`;
    callback(iceFood);
  }, 1500)
}


order((food)=>{
  console.log(food)

  cool(food,(coolFood)=>{
    console.log(coolFood)

    ice(coolFood, (iceFood)=>{
      console.log(iceFood)
    })
    
  });
})

// 인덴트가 점점 깊어질 수 있음..! 기능이 늘어날수록!
// 이런걸 콜백 지옥이라고 부른다!
// 콜백지옥을 피하기 위해 promise라는 걸 사용하면 됨!


// cool(음식,콜);
// ice(식은음식, 콜백)

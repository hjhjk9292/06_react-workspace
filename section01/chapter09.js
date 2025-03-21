// 함수 선언

function hi(){
  console.log("안녕")
}

console.log("호출 전")
hi();
console.log("호출 후")


let area = getArea(10, 30); // 인자 2개 넘김
console.log(area);
getArea(30, 40);

// 호이스팅 : 최상단으로 끌어올려서 실행해줌
function getArea(width, height){ // 매개변수는 이름만 지으면 됨

  function another(){ // 중첩함수
    console.log("어나더")
  }

  another() // 콜을 해야 실행 가능

  let area = width * height;
  return area; // 반환값
}



console.log(1)

// 대표적인 비동기 함수 // setInterval
setTimeout(()=>{ // setTimeout(콜백함수, 시간); 이 시간이 지나면 콜백함수를 실행함
  console.log(2)
}, 3000); // WEB APIs 위탁

console.log(3)


// 단일 쓰레드
// web~~~
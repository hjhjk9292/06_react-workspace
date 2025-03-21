// for문

for(let idx=0; idx<=10; idx++){

  if(idx % 2 === 0){
    continue; // 건너뛰기, 그냥 증감만 수행함
  }
  console.log("반복");

  if(idx >= 5){
    break; // 나와 가장 가까운 반복문 탈출
  }
}
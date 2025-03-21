// 1. Spread 연산자
// => Spread : 흩뿌리다, 펼치다 라는 뜻
// => 객체나 배열에 저장된 여러개의 값들을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5,6];

// console.log(arr2) 위험하고 귀찮은 방법! 갑자기 값이 추가된다거나 삭제된다고 하면?
let arr2 = [4, ...arr1, 5,6];
// console.log(arr2);

let cookie = {
  makeDate : "20250321",
  maker:"siyeon",
  shop:"hclass"
}

let blueberryCookie = { // 소스가 편해짐,,
  ...cookie,
  topping:"blueberry"
}

// console.log(blueberryCookie)

function funcA(p1, p2, p3){
  // console.log(p1, p2, p3)
}

funcA(...arr1);

// 2. Rest 매개변수
// Rest는 나머지, 나머지 매개변수

function funcB(one,...rest /*, four 뒤에 작성하면 안 됨*/){ // rest 매개변수 (rest 앞에는 작성 가능하지만, 뒤에는 안되고,, rest 자리에 arguments 또는 rest 많이 사용!! 무조건 rest 또는 arguments가 뒤에 나와야함)
  console.log(one,rest)
}

funcB(...arr1); // 스프레드 연산자
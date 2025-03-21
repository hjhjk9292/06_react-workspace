// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  {name : "차은우", hobby: "얼굴"},
  {name : "주지훈", hobby: "연기"},
  {name : "박보검", hobby: "연기"},
];

// const actor = arr1.filter((item)=>{
//   if(item.hobby === "연기"){
//     return item;
//   }
// })

// console.log(actor)

// 이렇게 단축해서 쓸 수 있음ㄱ ㄴ 위처럼 써도 상관은 없음
const actor = arr1.filter((item)=>
  item.hobby === "연기" // item의 hobby가 연기인 것만 뱉겠다
)

// console.log(actor)

// 2. map ** 이거 중요!!! ** => 콜백함수를 돌려서 순회하고 배열로 반환한다
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr)=>{
  // console.log(item, idx, arr)
  // 특이하게 map 안에 있는 콜백함수에서는 return을 쓸 수 있음!
  return item * 2;
})

// console.log(mapResult1)

let names = arr1.map((item)=> item.name);
// console.log(names)

// 3. sort => 원본 배열에 영향을 끼치는 메서드
// 배열을 사전순으로 정렬하는 메서드

let arr3 = [10, 3, 5]; // 숫자는 정렬 안됨! 사전순이라서,, 
// arr3.sort();

// console.log(arr3) 숫자열 정렬하고 싶은 경우 작성 방법ㄱ
arr3.sort((a,b)=>{
  if(a > b){
    // b가 a 앞에 와라
    return 1; // 양수를 반환하면 됨
  }else if(b>a){
    // a가 b 앞에 와라
    return -1; // 음수를 반환하면 됨
  }else {
    // 두 개의 자리를 바꾸지 마라
    return 0; // 0을 반환하면 됨
  }
});

// console.log(arr3)


// 4. toSorted(가장 최근에 추가된 따끈따끈한 최신 함수)
// 원본 배열을 훼손시키지 않고, 새로운 배열 반환
let arr5 = ["c","b","a"];
let sorted = arr5.toSorted();

console.log(sorted)
console.log(arr5)

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "I am pretty"];
let join = arr6.join(" ");
console.log(join)
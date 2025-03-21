// 5가지의 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr){ // 이거 콜백함수임!
  // console.log(idx, item * 2)
})

let doubledArr = [];
arr1.forEach((item)=>{
  doubledArr.push(item * 2);
})

// console.log(doubledArr)

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(1);
// console.log(isInclude)

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2,2,3];
let index = arr3.indexOf(2); // 존재하지 않으면 -1 반환(ex. 30) // 중복이면 앞에 인덱스 (ex. 2가 두 개 존재)
// console.log(index)

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arr4 = [1,2,3];
const findIndex = arr4.findIndex((item)=>{
  if(item % 2 !== 0){
    return true;
  }
})

// console.log(findIndex)
// 근데 그냥 indexOf 쓰면 안될까? 이걸 왜 쓰냐...

let objectArr = [
  {name : "차은우"},
  {name : "주지훈"},
];

const objIndex = objectArr.indexOf({name: "차은우"});
// console.log(objIndex);

// indexOf는 얕은 비교로 하기 때문에 잘 못 찾음!
// 객체를 찾을 때는 findIndex 메서드 써야함

const objIndex2 = objectArr.findIndex((item)=>{
  if(item.name === "차은우"){
    return true;
  }
})

// console.log(objIndex2)

// 단순 원시 타입 indexOf
// 복잡한 객체 타입은 findIndex 를 사용!!

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 , 요소를 그대로 반환

let arr5 = [
  {name : "은우"},
  {name : "지훈"},
]

const find = arr5.find((item)=>{
  if(item.name === "지훈"){
    return true;
  }
})

console.log(find)
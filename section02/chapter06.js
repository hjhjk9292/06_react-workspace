// 1. 배열 순회
let arr = [1,2,3];

// 1_1. 배열 인덱스
for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

// 1_2. for of 반복문
for(let item of arr){
  console.log(item)
}

// 2. 객체 순회
let person = {
  name : "차은우",
  age : 27,
  hobby : "얼굴"
}

// 2_1. Object.keys() 사용
// => 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys){
  const value = person[key];
  console.log(key, value)
}


// 2_2. Object.values() 사용
// => 객체에서 value값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let value of values){
  console.log(value)
}

// 2_3. for in 문
for(let key in person){
  const value = person[key];
  console.log(key,value);
}

// for of는 배열에만!! 쓸 수 있음
// for in은 객체에만!! 쓸 수 있음 (객체에서 속성이 있는지 없는지 확인하는 연산자 in 이니까 그걸로 기억!)
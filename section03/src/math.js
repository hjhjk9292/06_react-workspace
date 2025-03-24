// src/math.js

export function add(a,b){
  return a + b;

}

export function sub(a,b){
  return a - b;
}

// 기본 함수
export default function multi(a,b){
  return a * b;
}

// // CJS 모듈 시스템 방식
// module.exports = {
//   add,
//   sub,
// }

// ESM 방식
// export {add, sub}

// 객체 구조 분해 할당
// const {add, sub} = require("./math") // 자바로 생각하면 import 구문

// es 모듈 시스템 할 때는 확장자까지 꼭 써주기!
// import mul from "./math.js"
// import mul,{add, sub} from "./math.js"
import randomColor from "randomcolor";

const color = randomColor();
console.log(color)
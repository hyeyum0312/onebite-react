console.log("안녕 Node.js");

// CJS (Common JS모듈 시스템)
// const moduleData = require("./math");
// const { add, sub } = require("./math"); // 구조분해할당 가능.

// ES모듈시스템
import multiply1, { add, sub } from "./math.js";
// export default로 선언한 함수를 불러올때 .
//import multiply1 from "./math.js";
// import multiply1, { add, sub } from "./math.js"; 파일이 같다면 이렇게도가능.

import randomColor from "randomcolor"; // 라이브러리는 .js등의 경로까지 작을 필요없음.
let color = randomColor();
console.log(color);

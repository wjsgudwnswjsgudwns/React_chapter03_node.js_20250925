// import {PI, getArea, getCircumference} from "./circle.js";

// console.log(getArea(10));

// console.log(getCircumference(10));

// //------------------------------------------------------------

// import * as circle from "./circle.js";
// // 모든 요소를 import 함

// console.log(circle.getArea(10));

// console.log(circle.getCircumference(10));

// //------------------------------------------------------------

// import circle from "./circle.js";

import lodash from "lodash";
const arr = [1,1,1,2,2,1,1,4,4,3,2];
const uniqarr = lodash.uniqBy(arr); // 중복을 자동으로 제거 해주는 메소드
console.log(uniqarr);
export const PI = 3.141592;

export function getArea(radius) { // 원의 넓이를 반환하는 함수
    return radius*radius*PI;
}

export function getCircumference(radius) {
    return 2*PI*radius;
}

// 다른곳에서 사용하기 위해 export를 앞에 써줌

// 매번 앞에 export를 쓰기엔 함수가 너무 많아지면 가독성이 떨어지므로
// 한번에 모아서 export 시킴
export{PI, getArea, getCircumference};


export default {
  PI,
  getArea,
  getCircumference,
};
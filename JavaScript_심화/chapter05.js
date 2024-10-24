// 원시타입 VS 객체타입
// 원시타입 : 값 자체로써 변수에 저장되고 복사된다., 불변값.
// 객체타입: 참조값을 통해 변수에 저장되고 복사된다. 가변값.

// 원싵타입은 변수의 값수정해도 메모리값은 변경되지 않음

// 객체타입은 메모리상에서 원본 값이 수정되어버림
// 값은 메모리공간에 따로 보관해두고 참조값을 통해 변수에 저장되고 복사되므로 특정 프로퍼티의 값을 수정하게되면 메모리에 저장된 원본 데이터 자체가 수정됩니다.

// 얕은복사
// 객체의 참조값을 복사함 , 원본객체가 수정될 수 있어서 위험함.
let o1 = { name: "조혜연" };
let o2 = o1;

// 깊은복사
let o3 = { name: "조혜연" };
let o4 = { ...o3 };
// 새로운 객체를 생성하면서 프로퍼티만 따로 복사함.
// 원본 객체가 수정될 일이 없어 안전함.

// 얕은비교
// 참조값을 기준으로 비교
console.log(o1 === o2); // true ,
console.log(o3 === o4); // false

// 깊은 비교
// JSON.stringify()
// - 자바스크립트 내장함수, 객체를 문자열로 변환하는 기능.
console.log(JSON.stringify(o3) === JSON.stringify(o4)); // true

// 객체간의 비교는 참조값을 통해 이루어집니다!!!

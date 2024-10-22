// 배열의 구조분해할당.
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 객체의 구조분해할당.
let person = {
  name: "조혜연",
  age: 33,
  hobby: "수영",
};

let { name, age, hobby } = person;

// 객체 분해구조 할당을 이용, 함수의 매개변수 받기

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);

// 좀 더 복잡한? 구조분해할당 연습
let obj = {
  a: ["a", "b", "c"],
  b: { aa: 1, bb: 2 },
  c: 1,
};

// 구조분해 할당
const {
  a: [first, second, third], // 배열의 값을 구조분해 할당
  b: { aa, bb, cc = 0 }, // 없는 값 cc에 기본값 0 할당
  c,
} = obj;

// ...을 사용한 구조분해 할당도 가능해요!
// const {
//     a: [first, ...rest],  // 첫 번째 값만 가져오고 나머지는 'rest'에 배열로 할당
//     b: { aa, bb },
//     c
//   } = obj;

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

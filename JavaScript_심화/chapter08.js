// 5가지 요소 순회 및 탐색 메서드.
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드.

let arr = [1, 2, 3];
arr.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubledArr = [];

arr.forEach((item) => {
    doubledArr.push(item) * 3;
});

// includes
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log("isInclude", isInclude);

// index of
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log("index", index);

let objectArr = [{ name: "조혜연" }, { name: "안혜리" }];

// 못찾음. indexOf는 얕은비교를함 , 객체는 프로퍼티 기준으로 비교가 이루어지지않음
// 특정 객체가 존재하는지 찾을 수 없음 , 이 때 findIndex를 사용한다.
console.log(objectArr.indexOf({ name: "안혜리" })); // -1
console.log(objectArr.findIndex((item) => item.name === "안혜리")); //1

// findIndex
// 특정 요소의 인덱스 위치 반환, 모든요소를 순회하면서 콜백함수 전달. 만족하는 것을 찾아 반환.

let arr4 = [1, 2, 3];
const findIndex = arr.findIndex((item) => {
    if (item % 2 !== 0) return true;
});

// console.log("findIndex", findIndex)

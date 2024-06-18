// 배열 변형
// 5가지 배열변형

// 1. filter
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "조혜연", hobby: "수영" },
    { name: "홍길동", hobby: "독서" },
];

// 특정 조건 검색, 카테고리 필터에 필수적으로 사용된다.
const tennisPeople = arr1.filter((itme) => itme.hobby === "테니스");
// console.log("tennisPeople", tennisPeople);

// 2. map
// 배열의 모든 요소를 순회 하면서 각각 콜백함수 실행, 결과값을 모아서 새로운 배열로 반환.
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log("mapResult", mapResult); // [2,4,6]

let names = arr1.map((item) => item.name);

console.log("names", names);

// sort , 배열을 사전순으로 정렬하는 메서드.
let arr3 = [10, 3, 5];
let sort = arr3.sort((a, b) => {
    if (a > b) {
        // b가 a앞에 와라.
        return 1;
    } else if (a < b) {
        // a가 b앞에 와라
        return -1;
    } else {
        // a,b자리 그대로 유지
        return 0;
    }
});
console.log(sort);

// toSorted (가장최신함수.)
// sort 원본배열 자체를 정렬
// 새로운 배열을 반환하는 메서드.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 메서드,
let arr6 = ["hi", "im", "winterlood"];
console.log(arr6);
let join = arr6.join(" - ");
console.log("join", join);

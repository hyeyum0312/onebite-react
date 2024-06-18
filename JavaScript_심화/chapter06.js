// 배열순회

// 배열인덱스
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log("arr[i]", arr[i]);
}

// for of 반복문 (배열에만 사용)
for (let item of arr) {
    console.log("item", item);
}

// 객체순회
let person = {
    name: "조혜연",
    age: 33,
    hobby: "수영",
};

// Object.keys
let keys = Object.keys(person);
for (let key of keys) {
    console.log("key", key, person[key]);
}

// Object.keys
let values = Object.values(person);
for (let value of values) {
    console.log("values", value);
}

// for in , 객체만을 위해 존재.
for (let key in person) {
    console.log("key", key, person[key]);
}

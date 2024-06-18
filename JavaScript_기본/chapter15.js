// 객체
// 원시타입(Number,String...)이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장 할 수 있는 자료형을 의미.

// 1. 객체생성

let obj1 = new Object();
let obj2 = {}; // 간편해서 더 많이 사용됨.

let person = {
  name: "조혜연",
  age: "33",
  bobby: "수영",
  extra: {},
  10: 29,
};

console.log("person", person);

// 객체 프로퍼티 다루는 법
// 1. 특정 프로퍼티 접근
let myname = person.name;
console.log(myname);
// console.log(myname1); // undefined

let age = person["age"];
console.log("age", age); // ""쌍따옴표로 적어줘야나옴

let property = "bobby";
let hobby = person[property];
console.log("hobby", hobby);

// 2. 새로운 프로퍼티 추가.
person.job = "fe developer";
person["favoriteFood"] = "Sushi";

// 3. 객체 프로퍼티 삭제.
// delete 연산자 삭제.
delete person.job;
delete person["age"];
console.log("person", person);

// 4. 프로퍼티존재 유무확인. (in연산자);
let result1 = "cat" in person; // false

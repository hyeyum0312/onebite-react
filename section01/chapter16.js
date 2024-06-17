// 상수객체.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log("animal", animal);

// 2. 메서드 , 객체의 값이 함수인 프로퍼티를 말함.
const person = {
  type: "사람",
  name: "조혜연",
  // 메서드선언
  sayHi: function () {
    // 객체의 동작을 정의
    console.log("안녕!");
  },
  sayBye() {
    // 객체의 동작을 정의
    console.log("잘가!");
  },
};

person.sayHi();
person["sayHi"]();
person.sayBye();

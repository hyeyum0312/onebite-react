// Truthy와 Falsy
//참이나 거짓을 의미하지 않는 값도 조건문 내에서 참이나 거짓으로 평가하는 특징.

// falsy한 값. 조건문에서 거짓으로 평가.
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// truthy한 값.
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 활용 사례
function printName(person) {
  // null이거나 undefined가 아닌지 먼저 확인 필요 , 비효율적인 방식
  //   if (person === undefined || person === null) {
  //   }

  // Truthy / falsy
  if (!person) {
    console.log("person값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "조혜연" };
printName(person);

// 형변환 type casting
// : 어떤 타입의 값을 다른 타입으로 변경하는 것을 말함.

// 1. 묵시적 형변환
// 개발자가 설정하지 않아도 알아서 자바스크립트엔진이 형변환. 변경

let num = 10;
let str = "20";
const result = num + str;
console.log("result"); // 1020

// 2. 명시적 형변환
// 개발자가 직접 함수등을 이용해서 형 변환을 일으킴.
let str1 = "10";
let strNum1 = Number(str1);
console.log(10 + strNum1);

let str2 = "10개";
let strNum2 = parseInt(str2);
console.log(strNum2);

// 3. 숫자열 > 문자열
let num1 = 20;
console.log(num1.toString());
console.log(String(num1));

// String() - 어떤 형태이든 문자로 형변환
// .toString() - null, undefined 형 변환 시 오류

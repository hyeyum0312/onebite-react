// 1. 함수 표현식

// 선언식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// varB(); // 호이스팅 대상이 불가.

//익명함수
let varB = function () {
  console.log("funcB");
};
varB();

// 2. 화살표 함수.
let varC = () => {
  console.log("funC");
};
varC();

// 한줄로 간단한경우 {}생략가능
let varD = () => 1;
console.log("varD", varD());

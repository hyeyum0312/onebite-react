// 스코프.
// 우리나라 말로 범위를 뜻함.
// 변수나 함수에 접근하거나 호출 할 수 있는 범위를 말함.

// 전역스코프 -> 전체 영역에서 접근가능.
// 지역스코프 -> 특정 영역에서만 접근 가능.

let a = 1;
function funcA() {
  let b = 2; // 지역스코프.
  console.log(a);

  function funcB() {} // 지역스코프.
}
funcA();
// funcB() // 오류..!

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역스코프.
}

console.log("d"), d;

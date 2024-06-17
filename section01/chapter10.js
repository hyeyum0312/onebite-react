// 반복문
// 초기식, 조건식, 증강식.
for (let i = 0; i < 10; i++) {
  console.log("i", i);
}

for (let i = 1; i <= 10; i++) {
  console.log("반복");

  if (i % 2 === 0) {
    continue; // 다음반복문은 실행되지 않음.
  }

  console.log("i", i);

  if (i >= 5) {
    break; // 강제종료.
  }
}

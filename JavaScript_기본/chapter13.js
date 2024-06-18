// 콜백함수.
// 메인함수가 언제든지 실행할 수 있다.
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub);

main(function sub2() {
  console.log("sub2");
});

main(() => {
  console.log("sub3");
});

// 콜백함수의 활용
function repeat(count) {
  for (let i = 1; i <= count; i++) {
    console.log("i", i);
  }
}
repeat(5);

function repeatDouble(count) {
  for (let i = 1; i <= count; i++) {
    // console.log("i*2", i * 2);
  }
}

// repeatDouble(5);

function repeat2(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat2(5, function callBack(idx) {
  console.log("idx", idx);
});

repeat2(5, (idx) => {
  console.log("idx2", idx * 2);
});

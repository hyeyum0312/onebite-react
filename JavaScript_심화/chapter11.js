// 동기란 무엇일까?
// 하나에 한번씩 처리
// 작업을 실행하고 처리하는 것을 쓰레드라부름.
// 자바스크립으 엔진에는 쓰레드가 1개밖에 없음

// 비동기
// 작업을 순서대로 처리하지 않는방식

console.log(1);
setTimeout(() => {
    console.log("2");
}, 3000);
console.log(3);

// 이게 왜 가능한가요?
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs라는 브라우저 별도 공간에서 실행된다.

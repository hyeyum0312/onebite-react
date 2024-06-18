// 비동기 작업 처리하기2
// promise
// 비동기 작업을 효율적으로 처리 할 수 있도록 도와주는 자바스크립트의 내장객체
// 비동기작업실행, 비동기 작업상태관리, 비동기 작업 결과저장, 비동기 작업 병렬실행, 비동기작업 다시 실행 ....

// 대기 pending
// 성공 Fullfield
// 실패 Rejected
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기작업 실행하는 함수
        // executor

        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("숫자가아님..");
            }
        }, 2000);
    });

    return promise;
}

// then메서드
// -> 그 후에
// 프로미스 체이닝.
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// 콜백지옥.
add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

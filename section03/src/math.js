// math 모듈
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// CJS (Common JS모듈 시스템)

// module.exports = {
//     add, // add : add , key,vlaue값이 같다면 생략가능.
//     sub,
// };

// ES모듈시스템
export { add, sub };

// 또는 이렇게 해도된다.
export default function multiply1(a, b) {
    return a * b;
}

export function multiply2(a, b) {
    return a * b;
}

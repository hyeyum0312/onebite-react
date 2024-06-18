// spread연산자.
// spread 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [4, ...arr1, 5, 6];
let arr4 = [...arr1, ...arr2];

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    a: obj1.a,
    b: obj1.b,
    c: 3,
    d: 4,
};

let obj3 = {
    ...obj1,
    c: 3,
    d: 4,
};

// console.log("obj3", obj3);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest매개변수
// Reat는 나머지, 나머지 매개변수
// function funcB(one, two, ...rest, four) , 이건불가!
// rest뒤엔 아무것도 올 수 없음.

function funcB(one, two, ...rest) {
    console.log(rest);
}

funcB(...arr1);

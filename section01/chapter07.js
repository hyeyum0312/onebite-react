// 1. 대입연산자.
const var1 = 1;

// 2. 산술연산자.
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6);

// 3. 복합 대입 연산자.
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감연산자.
let num8 = 10;
console.log(++num8); // 11, 전위연산자
console.log(num8++); // 11, 후위연산자.
console.log(num8); // 12

// 5. 논리연산자.
let or = true || false;
let and = true && false;
let not = !true;

// 6.비교연산자
let comp1 = 1 === 2; // 동등연산자
let comp2 = 1 !== 2; // 비동등연산자
// 비교 다른것 ==만 하는데 ===하는 이유
// 값의 자료형까지 비교 하기위하여.

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

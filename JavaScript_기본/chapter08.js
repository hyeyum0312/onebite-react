// 1, null 병합연산자.
// null, undefined가 아닌 것을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefined,null이 아닌것.
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 앞에거 먼저.

let userName = "조혜연";
let userNickname = "Joy";
let displayName = userName ?? userNickname;

// 2. typeof연산자.
// 값의 타입을 문자열로 변환하는 기능을 하는 연산자.
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항연산자.
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";

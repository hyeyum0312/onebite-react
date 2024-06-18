// 배열메서드
// 6가지의 요소조작 메서드

// 1. push , 배열 맨 뒤에 새로운 요소 추가.
let arr1 = [1, 2, 3];
arr1.push(4);

// 2. pop, 배열 맨 뒤에 새로운 요소 제거 후 반환.
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
console.log(popedItem); // 3

// 3. shift , 배열 맨 앞에 있는 요소 제거 후 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3); // 1,[2,3]

// 4. unshift, 배열 맨 앞에 있는 요소 추가
let arr4 = [1, 2, 3];
const newLength = arr4.unshift(0);
console.log("arr4", newLength, arr4); // 4 [ 0, 1, 2, 3 ]

// shift, unshift는 push나 pop보다는 느리게 동작함. 되도록 push,pop처리가 좋다.

// 5. slice, 배열의 특정범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const slicedItem1 = arr5.slice(2, 5); // [3,4,5]
const slicedItem2 = arr5.slice(2); // [3,4,5]
const slicedItem3 = arr5.slice(-1); // [5]
const slicedItem4 = arr5.slice(-3); // [3,4,5]
console.log("slicedItem4", slicedItem4);
console.log("arr5", arr5); // 원본배열은 바뀌지않음.

// concat
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
console.log(concatArr); // [1,2,3,4]

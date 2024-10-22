// 단락 평가 활용 사례.
function returnFalse() {
  console.log("false함수");
  return undefined;
}

function returnTrue() {
  console.log("true함수");
  return 10;
}

// // console.log(returnFalse() || returnTrue()); // true

// console.log(returnTrue() || returnFalse()); // false

// console.log(returnTrue() && returnFalse()); // false

// const printName = (person) => {
//   if (!person) {
//     return "객체가 아닙니다";
//   }
//   return person.name;
// };

// 단락평가로 처리하면 훨씬 간결해집니다.
const printName = (person) => {
  return person && person.name;
};

printName();
printName({ name: "조혜연" });

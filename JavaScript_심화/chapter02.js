// 단가 평가 활용 사례.
function returnFalse() {
    console.log("false함수");
    return undefined;
}

function returnTrue() {
    console.log("true함수");
    return 10;
}

// // console.log(returnFalse() || returnTrue()); // true

// console.log(returnTrue() || returnFalse()); // flase

// console.log(returnTrue() && returnFalse()); // flase

function printName(person) {
    const name = person && person.name;

    console.log(name || "person의 값이 없음.");
}

printName();
printName({ name: "조혜연" });

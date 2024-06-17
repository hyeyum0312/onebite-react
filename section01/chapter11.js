// 함수 선언
function greeting() {
  console.log("함수선언");
}

console.log("호출 전");
greeting();
console.log("호출 후");

// 매개변수.
function getArea(width, height) {
  // 중첩함수.
  function another(width, height) {
    console.log("another");
  }

  another();

  let area = width * height;
  return area; // 반환값.
}

let area1 = getArea(10, 20); // 인수

console.log("area1", area1);

// 함수 내 다른 함수 설정 가능
// 선언이 먼저 이루어지지 않은 함수를 미리 호출 가능.
// 호이스팅 기능으로 인해 가능하다.
// 선언문을 호출문 아래 두어도 호이스팅 되기 때문에 정상작동함.

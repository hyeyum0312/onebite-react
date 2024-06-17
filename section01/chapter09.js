// 1, 조건문 (if)
let num = 10;

if (num >= 10) {
  // console.log("10 이상입니다.");
}

//  switch문
// 다수의 조건처리 시 if보다 더 직관적이다.
let animal = "cat";

switch (animal) {
  case "cat":
    {
      console.log("고양이");
    }
    break;

  case "dog":
    {
      console.log("강아지");
    }
    break;

  case "bear":
    {
      console.log("곰");
    }
    break;
  default: {
    console.log("그런동물은 모릅니다.");
  }
}

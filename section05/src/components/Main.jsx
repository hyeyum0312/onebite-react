import "./Main.css";
// JSX주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (조건문,반복문 사용불가. )
// 2. 숫자,문자,배열의 값만 정상적으로 렌더링된다. (불리언,undefined,null불가. )
// 객체를 jsx로 렌더링하려고하면 안된다. 점표기법 필요.
// 3. 모든 태그는 닫혀있어야한다.
// 4. 최상위태그는 하나여야한다.
const Main = () => {
    const user = {
        name: "조혜연",
        isLogin: false,
    };
    if (user.isLogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div className="login">로그인</div>;
    }
};

export default Main;

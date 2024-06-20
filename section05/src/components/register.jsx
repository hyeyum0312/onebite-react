// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useRef, useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    const countRef = useRef(0); // 값이 변경되어도 리렌더링되지 않음.
    const inputRef = useRef();

    // 리렌더링을 원하지 않으면 let count = 0으로 해도될텐데 왜 사용하는가?
    // 변수 카운트로 하면 , 많이 수정해도 고정되어있음. 결국 리셋됨.
    // 만약 외부로 뺀다면? 수정 횟수가 잘 카운팅이된다. 그러나 변수를 외부에 사용 시 한번만 렌더링 하는 상황에서는 ok, 여러번 렌더링 시 치명적인 문제가 발생함.
    // 첫번째 렌더링한 컴포넌트와 , 두번째 렌더링한 컴포넌트는 하나의 변수를 공유하게되므로 수정횟수가 증가함, 의도했던 상황이 아니기때문에!
    // useRef는 리렌더링되어도 리셋이 되지 않음

    const onChangeInput = (e) => {
        countRef.current++;
        console.log(countRef);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        if (input.name === "") {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input value={input.name} onChange={onChangeInput} placeholder={"이름"} ref={inputRef} />
            </div>

            <div>
                <input type="birth" onChange={onChangeInput} value={input.birth} />
            </div>

            <div>
                <select onChange={onChangeInput} value={input.country}>
                    <option></option>
                    <option value="kr">대한민국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <input type="textarea" onChange={onChangeInput} value={input.bio} />
            </div>

            <button onClick={onSubmit}>버튼</button>
        </div>
    );
};

export default Register;

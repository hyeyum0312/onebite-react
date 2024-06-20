// 3가지 Hook관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅 커스텀 훅을 직접만들 수 있다.

import UseInput from "../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = UseInput();

    console.log("input", input);
    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
};

export default HookExam;

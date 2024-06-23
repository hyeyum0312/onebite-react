import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const isMount = useRef(false);
    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log("mount");
        // 마운트 되었을 때 한번만 실행 시키고싶다면 이렇게, []빈배열
    }, []);
    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        // [] 뎁스를 생략 후 리렌더링 될 때마다 계속 실행

        // 업데이트가 되는 순간에만 처리하고싶다면 마운트 되었나 안되었나 확인하는 변수를 생성
        // useRef
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });
    // 3. 언마운트 : 죽음
    useEffect(() => {
        console.log("unmount");
    }, []);

    //  count가 변할 때 마다 콜백함수 실행.
    useEffect(() => {
        console.log(`count : ${count}   input : ${input}`);
    }, [count, input]);
    // 의존성 배열 dependency array = deps
    // deps에는 값을 여러개 넣을 수 있음.
    // [count, input]둘 중 하나의 값만 변해도 실행된다.

    const onClickButton = (value) => {
        setCount(count + value);

        console.log(count);
        // 비동기. 변경되기 이전의 값이 출력됨
    };
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>

            <section>
                <Viewer count={count} />
                {Even % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;

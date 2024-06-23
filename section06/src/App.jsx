import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        setCount(count + value);
    };
    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;

// props라는 기능을 사용해서
// 부모에서 자식으로만 데이터를 전달 할 수 있음.
// 위에서 아래로 한방향으로만 데이터가 흐른다 = 단방향 데이터 흐름
// 직관적으로 쉽게 관리하기 용이함.
// 데이터의 state의 위치를 항상 어디에 둘지 생각하며 개발헤야한다.
// state Lifting (state끌어올리기.)

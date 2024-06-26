import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";
// 1. "/" 모든 일기를 조회하는 home페이지
// 2. "/new": 새로운 일기를 작성하는 new페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
// Routes컴포넌트 내에는 Route만 들어갈 수 있다.  <div>등등 사용X.
// 동적경로 "/diary/:id" , /:id 명시
function App() {
    const nav = useNavigate();
    const onClickbutton = () => {
        nav("/new");
    };
    return (
        <>
            <Header title={"Header"} leftChild={<Button text={"Left"} />} rightChild={<Button text={"Right"} />}></Header>

            {/* <Button
                type={""}
                text={"버튼1"}
                onClick={() => {
                    console.log("버튼클릭");
                }}
            />
            <Button
                type={"POSITIVE"}
                text={"버튼2"}
                onClick={() => {
                    console.log("버튼클릭");
                }}
            />
            <Button
                type={"NEGATIVE"}
                text={"버튼3"}
                onClick={() => {
                    console.log("버튼클릭");
                }}
            /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;

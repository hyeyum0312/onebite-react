import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/NotFound";
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
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>new</Link>
                <Link to={"/diary"}>diary</Link>
            </div>
            <button onClick={onClickbutton}>New 페이지로 이동</button>

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

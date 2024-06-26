import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/NotFound";
// 1. "/" 모든 일기를 조회하는 home페이지
// 2. "/new": 새로운 일기를 작성하는 new페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
// Routes컴포넌트 내에는 Route만 들어갈 수 있다.  <div>등등 사용안됌.
function App() {
    return (
        <>
            <div>hello</div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;

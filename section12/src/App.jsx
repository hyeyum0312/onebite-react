import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { useReducer, useRef, createContext, useEffect, useState } from "react";

function reducer(state, action) {
    let nextState;
    switch (action.type) {
        case "INIT":
            return action.data;
        case "CREATE":
            nextState = [action.data, ...state];
            break;
        case "UPDATE":
            nextState = state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
            break;
        case "DELETE":
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        default:
            return state;
    }

    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [isLoading, setIsloading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const storedDate = localStorage.getItem("diary");
        if (!storedDate) {
            setIsloading(false);
            return;
        }

        const parsedDate = JSON.parse(storedDate);

        if (!Array.isArray(parsedDate)) {
            setIsloading(false);
            return;
        }

        let maxId = 0;
        parsedDate.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        });

        idRef.current = maxId + 1;

        dispatch({
            type: "INIT",
            data: parsedDate,
        });

        setIsloading(false);
    }, []);

    // 일기 추가
    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createDate,
                emotionId,
                content,
            },
        });
    };

    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    if (isLoading) {
        return <div>데이터 로딩중입니다 ... </div>;
    }

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
                    <Routes>
                        <Route path="/*" element={<Notfound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;

// 1. "/" 모든 일기를 조회하는 home페이지
// 2. "/new": 새로운 일기를 작성하는 new페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
// Routes컴포넌트 내에는 Route만 들어갈 수 있다.  <div>등등 사용X.
// 동적경로 "/diary/:id" , /:id 명시

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { useReducer, useRef, createContext } from "react";
// 1. "/" 모든 일기를 조회하는 home페이지
// 2. "/new": 새로운 일기를 작성하는 new페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary페이지
// Routes컴포넌트 내에는 Route만 들어갈 수 있다.  <div>등등 사용X.
// 동적경로 "/diary/:id" , /:id 명시

const mockData = [
    {
        id: 1,
        createDate: new Date("2024-06-27").getTime(),
        emotionId: 1,
        content: "1번 일기내용",
    },
    {
        id: 2,
        createDate: new Date("2024-06-26").getTime(),
        emotionId: 2,
        content: "2번 일기내용",
    },
    {
        id: 3,
        createDate: new Date("2024-05-25").getTime(),
        emotionId: 3,
        content: "3번 일기내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
        case "DELETE":
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

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

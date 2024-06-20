import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const Hello = () => {
    return <div>hello</div>;
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// StrictMode 잠재적으로 문제가있는지 내부적으로 검사해서 경고해주는 도구, 실습용으론 사용안해도됌.

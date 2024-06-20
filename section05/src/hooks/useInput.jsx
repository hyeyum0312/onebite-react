import { useState } from "react";

function UseInput() {
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default UseInput;

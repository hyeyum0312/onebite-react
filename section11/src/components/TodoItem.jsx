import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
    console.log("id, isDone, content, date ", id, isDone, content, date);
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckbox} readOnly className="checkbox" type="checkbox" checked={isDone} />
            <div className="contents">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};
export default memo(TodoItem);

// 고차컴포넌트 , (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     if (prevProps.id === nextProps.id) {
//         return false;
//     }
//     if (prevProps.isDone === nextProps.isDone) {
//         return false;
//     }

//     if (prevProps.content === nextProps.content) {
//         return false;
//     }

//     if (prevProps.date === nextProps.date) {
//         return false;
//     }

//     return true;
// });

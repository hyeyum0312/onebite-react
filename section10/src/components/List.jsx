import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import "./List.css";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => todo.content?.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        // 메모이제이션 하고싶은 연산.
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount,
        };
    }, [todos]);
    // 의존성배열 : deps

    return (
        <div className="List">
            <h4>Todo List</h4>
            <div>total: {totalCount}</div>
            <div>doneCount: {doneCount}</div>
            <div>notDoneCount: {notDoneCount}</div>

            <input value={search ?? ""} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />

            <div className="todos_wrapper">
                {filteredTodos.map((todo, index) => {
                    return <TodoItem {...todo} key={todo?.id ?? index} onUpdate={onUpdate} onDelete={onDelete} />;
                })}
            </div>
        </div>
    );
};
export default List;

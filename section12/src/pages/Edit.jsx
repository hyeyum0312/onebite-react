import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../Hooks/useDiary";
import usePageTitle from "../Hooks/usePageTitle";

const Edit = () => {
    const param = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(param.id);

    usePageTitle(`${param.id}번 일기 수정`);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            // 일기 삭제 로직.
            onDelete(param.id);
            nav("/", { replace: true });
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(param.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav("/", { replace: true });
        }
    };

    return (
        <div>
            <Header title={"일기 수정하기"} leftChild={<Button onClick={() => nav(-1)} text={"<뒤로가기"} />} rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />} />

            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;

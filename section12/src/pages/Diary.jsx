import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useNavigate, useParams } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../Hooks/useDiary";
import usePageTitle from "../Hooks/usePageTitle";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    const curDiaryItem = useDiary(params.id);
    usePageTitle(`${params.id}번 일기`);

    if (!curDiaryItem) {
        return <div>데이터 로딩중...!</div>;
    }

    const { createDate, emotionId, content } = curDiaryItem;

    return (
        <div>
            <Header title={`${getStringedDate(new Date(createDate))} 기록`} leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />} rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />} />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};
export default Diary;

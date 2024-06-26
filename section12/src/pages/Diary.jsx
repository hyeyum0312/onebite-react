import { useParams } from "react-router-dom";

const Diary = () => {
    const parms = useParams();
    return <div>{parms.id}번 일기입니다.</div>;
};
export default Diary;

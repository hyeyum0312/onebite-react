import { useContext, useState } from "react";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

    return data.filter((item) => beginTime <= item.createDate && item.createDate <= endTime);
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log("monthlyData", monthlyData);

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} leftChild={<Button text={"<"} onClick={onDecreaseMonth} />} rightChild={<Button text={">"} onClick={onIncreaseMonth} />} />
            <DiaryList data={monthlyData} />
        </div>
    );
};
export default Home;

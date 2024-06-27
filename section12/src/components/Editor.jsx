import { useEffect, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constans";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    useEffect(() => {
        if (initData) {
            console.log("??", initData);
            setInput({
                ...initData,
                createdDate: new Date(Number(initData.createDate)),
            });
        }
    }, [initData]);

    const nav = useNavigate();

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
            value = new Date(value);
        }
        setInput({
            ...input,
            [name]: value,
        });
    };

    const onClicksubmitButton = () => {
        onSubmit(input);
    };

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input name="createdDate" onChange={onChangeInput} type="date" value={getStringedDate(input.createdDate)} />
            </section>

            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem onClick={() => onChangeInput({ target: { name: "emotionId", value: item.emotionId } })} key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId ? true : false} />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?" />
            </section>
            <section className="button_section">
                <Button onClick={() => nav(-1)} text={"취소하기"} />
                <Button onClick={onClicksubmitButton} text={"작성완료"} type={"POSITIVE"} />
            </section>
        </div>
    );
};

export default Editor;

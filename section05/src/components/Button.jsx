const Button = ({ text, color, children }) => {
    const onClickButton = (e) => {
        console.log(e); // 합성이벤트 객체 : 모든 브라우저의 이벤트객체를 하나로 통일한 형태 (크롬/사파리/등등..)
        // cross browsing issue 브라우저 별 스펙이 달라 발생하는 문제
        // 이것을 해결하기 위해 synthetic Event , 통합규격.

        console.log(text);
    };

    return (
        <button onClick={onClickButton} style={{ color: color }}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

export default Button;

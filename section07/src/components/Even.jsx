import { useEffect } from "react";
const Even = () => {
    useEffect(() => {
        // 클린업 정리함수, useEffect끝날 때 호출.
        return () => {
            console.log("unmount");
        };
    }, []);
    return <div>짝수입니다.</div>;
};

export default Even;

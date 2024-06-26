import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [parms, setParams] = useSearchParams();
    console.log(parms.get("value"));
    return <div>Home</div>;
};
export default Home;

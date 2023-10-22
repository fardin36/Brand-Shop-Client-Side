import Brands from "../Brands/Brands";
import Banner from "./Banner";
import Description from "./Description";
import TopSeller from "./TopSeller";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Description></Description>
            <Brands></Brands>
            <TopSeller></TopSeller>
        </div>
    );
};

export default Home;
import Brands from "../Brands/Brands";
import Footer from "../NavbarFooter/Footer";
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
            <Footer></Footer>
        </div>
    );
};

export default Home;
import { Outlet } from "react-router-dom";
import Navbar from "../NavbarFooter/Navbar";
import Footer from "../NavbarFooter/Footer";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
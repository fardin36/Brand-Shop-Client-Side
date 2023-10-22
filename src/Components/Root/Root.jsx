import { Outlet } from "react-router-dom";
import Navbar from "../NavbarFooter/Navbar";
import Footer from "../NavbarFooter/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;
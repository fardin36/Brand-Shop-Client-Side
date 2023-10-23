import { Outlet } from "react-router-dom";
import Navbar from "../NavbarFooter/Navbar";
import Footer from "../NavbarFooter/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <div className="">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default Root;
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

    const navList = <>
        <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#ffb300]" : ""
            }
        >Home</NavLink>
        <NavLink
            to={'/add-product'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#ffb300]" : ""
            }
        >Add Product</NavLink>
        <NavLink
            to={'/my-cart'}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-[#ffb300]" : ""
            }
        >My Cart</NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="h-7"><img className="h-full" src={Logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-5 text-2xl font-bold px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <FaUserCircle className="text-3xl cursor-pointer"></FaUserCircle>
                <Link className="text-2xl font-bold">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
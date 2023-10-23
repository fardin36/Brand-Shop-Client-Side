import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState, useContext } from "react";
import whiteLogo from "../../assets/white-logo.png";
import blackLogo from "../../assets/black-logo.png";
import { AuthContext } from "../Providers/AuthProvider.jsx";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("black");
        }
        else {
            setTheme("light");
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged Out!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(() => {
                toast.error('failed to log out!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

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

    const navEnd = <>
        <label className="swap swap-rotate">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />

            {/* sun icon */}
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
        <div className="avatar">
            <div className="w-9 rounded-full text-3xl cursor-pointer">
                {
                    user?.photoURL ? <img src={user?.photoURL} /> : <FaUserCircle></FaUserCircle>
                }
            </div>
        </div>
        {
            user ?
                <>
                    <div className="text-sm">{user.displayName}</div>
                    <button onClick={handleLogOut} className="text-2xl font-semibold">Logout</button>
                </>
                :
                <NavLink
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-[#ffb300] text-2xl font-semibold" : "text-2xl font-semibold"
                    } to={"/login"}
                >Login</NavLink>
        }


    </>

    return (
        <div className="navbar bg-base-100 bg-opacity-80 fixed z-[100]">
            <div className="navbar-start">
                <a className="h-7"><img className="h-full" src={theme === "light" ? blackLogo : whiteLogo} alt="TechStore" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-center items-center gap-5 text-xl font-medium px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end gap-2 hidden lg:flex">
                {navEnd}
            </div>
            <div className="navbar-end gap-2 lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0 text-xl font-medium">
                        <div className="flex justify-start items-center flex-wrap gap-2">
                            {navEnd}
                        </div>
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
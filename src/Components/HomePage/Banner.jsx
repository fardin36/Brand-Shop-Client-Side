import { Link } from "react-router-dom";
import whiteLogo from "../../assets/white-logo.png";
import { FaShopify } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/djLqS1B/galaxy-s22-ultra-samsung-1670850224069.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <img className="mb-5 text-5xl font-bold" src={whiteLogo} alt="" />
                    <p className="mb-5 text-">Best place to place your order for your favourite electronics. Latest, best and cheapest.</p>
                    <Link className="btn rounded-lg"><FaShopify></FaShopify>SHOP NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
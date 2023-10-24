import { Link } from 'react-router-dom';
import { FaSadTear } from "react-icons/fa";

const NoProducts = () => {
    return (
        <div>
            <main className="min-h-screen w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-9xl font-extrabold tracking-widest"><img src="https://i.ibb.co/b5tJTqF/sad-cart.png" alt="" /></h1>
                <div className="text-2xl md:text-4xl font-semibold md:font-bold flex flex-col justify-center items-center pb-5">
                    sorry! no products available
                    <FaSadTear className="text-4xl font-bold"></FaSadTear>
                </div>
                <Link to="/" className="border px-5 py-3 shadow-xl rounded-lg font-medium">Go Home</Link>
            </main>
        </div>
    );
};

export default NoProducts;
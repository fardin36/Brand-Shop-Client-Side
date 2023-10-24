import { Link, useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ProductDetails = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const product = useLoaderData();
    const { image, name, brand, type, price, rating, description, } = product;

    const handleAddToCart = () => {

        const newCartItem = { email, image, name, brand, type, price, rating, description, }

        // add to cart using database server
        fetch(`https://technology-brand-server-bhu2qhum7-fardin36.vercel.app/cart`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCartItem),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to Cart!',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    })
                }
            })
    }

    return (
        <div className="flex flex-col justify-center min-h-screen pt-16">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-2xl p-3 max-w-xs md:max-w-3xl mx-auto border glass">
                <div className="w-full md:w-1/3 grid place-items-center">
                    <img src={image} alt="tailwind logo" className="rounded-xl" />
                </div>
                <div className="w-full md:w-2/3 flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <p className="font-medium hidden md:block">{brand}</p>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p className="font-bold text-sm ml-1">
                                {rating}
                                <span className="font-normal">(76 reviews)</span>
                            </p>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="border bg-[#ffb300] px-3 py-1 rounded-full text-xs text-black font-medium hidden md:block">{type}</div>
                    </div>
                    <h3 className="font-black md:text-3xl text-xl">{name}</h3>
                    <p className="md:text-lg text-base">{description}</p>
                    <div className="flex justify-between items-center">
                        <p className="text-4xl text-[#ffb300] font-bold">
                            ${price}
                        </p>
                        <Link onClick={user?.email && handleAddToCart} className="flex justify-end items-center gap-2 btn rounded-lg uppercase btn-ghost bg-[#ffb300] shadow-2xl text-black">Add to <FaShoppingCart></FaShoppingCart></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
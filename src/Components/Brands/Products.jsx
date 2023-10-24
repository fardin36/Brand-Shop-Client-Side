import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import NoProducts from "../ErrorPage/NoProducts";

const Products = () => {

    const brandName = useParams().name;
    console.log(brandName);
    const fetchedProducts = useLoaderData().filter(item => item.brand == brandName);
    console.log(fetchedProducts.length);

    return (
        <div className="min-h-screen flex flex-wrap justify-center items-center pt-20 gap-5">

            {
                fetchedProducts.length > 0
                    ?
                    fetchedProducts.map(product =>
                        <div key={product._id} className="w-full max-w-sm border border-[#ffb300] glass rounded-lg shadow-xl">
                            <div className="h-52 flex justify-center items-center">
                                <img className="p-2 h-full rounded-t-lg" src={product?.image} alt={`${product.name} image`} />
                            </div>
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight">{product?.name}</h5>
                                <div className="flex justify-start items-center pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <p className="font-bold text-base ml-1">{product?.rating}/5.0</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">${product?.price}</span>
                                    <div className="flex justify-end items-center gap-2">
                                        <Link to={`/update-product/${product._id}`} className="flex justify-center items-center gap-3 border border-[#ffb300] font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5">Update</Link>
                                        <Link to={`/products/${product._id}`} className="flex justify-center items-center gap-3 border border-[#ffb300] font-medium rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    :
                    <NoProducts></NoProducts>
            }



        </div>
    );
};

export default Products;
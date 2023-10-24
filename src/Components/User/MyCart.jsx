import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import NoCartItems from "../ErrorPage/NoCartItems";
import Swal from "sweetalert2";

const MyCart = () => {
    const { user, loading } = useContext(AuthContext);
    const cart = useLoaderData()?.filter(item => item?.email == user.email);
    const [cartItems, setCartItems] = useState(cart);
    let totalPrice = 0;
    cart.map(item => {
        totalPrice += parseInt(item.price);
    });

    const handleDeleteItems = (_id, price) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-brand-server-bhu2qhum7-fardin36.vercel.app/cart/${_id}`, {
                    method: "delete",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'Your item has been removed.',
                                'success'
                            )
                        }
                        totalPrice -= parseInt(price);
                        const newCartItems = cartItems.filter(item => item._id != _id);
                        setCartItems(newCartItems);
                    })
            }
        })
    }

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <div className="h-max w-max text-white font-bold text-2xl duration-[500ms,800ms]">
                    <div className="flex items-center justify-center">
                        <div className="h-10 w-10 border-t-transparent border-solid animate-spin rounded-full border-white border-8" />
                        <div className="ml-2">Processing...</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {
                cartItems.length > 0
                    ?
                    <div className="min-h-screen pt-20">
                        <h1 className="mb-10 text-center text-2xl font-bold">My Cart Items</h1>
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3 flex flex-col gap-4">
                                {
                                    cartItems.map(item => <div key={item._id} className="border flex justify-between items-center rounded-lg glass shadow-xl p-2">
                                        <div className="flex justify-start items-center">
                                            <img src={item?.image} alt="product-image" className="h-36 pr-2" />
                                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                <div className="mt-5 sm:mt-0">
                                                    <h2 className="text-lg font-bold">{item.name}</h2>
                                                    <p className="mt-1 text-base font-semibold">${item?.price} USD</p>
                                                </div>
                                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                    <div className="flex items-center space-x-4">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDeleteItems(item?._id, item?.price)} className="btn btn-square btn-outline rounded-lg btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </div>
                                    </div>)
                                }

                            </div>
                            <div className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3">
                                <div className="mb-2 flex justify-between">
                                    <p className="">Subtotal</p>
                                    <p className="">${totalPrice} USD</p>
                                </div>
                                <div className="mb-2 flex justify-between">
                                    <p className="">Shipping</p>
                                    <p className="">$129 USD</p>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">${totalPrice + 129} USD</p>
                                        <p className="text-sm ">including VAT</p>
                                    </div>
                                </div>
                                <button className="mt-6 w-full rounded-md bg-[#ffb300] py-1.5 font-medium text-blue-50 hover:bg-[#ffb300c9]">Check out</button>
                            </div>
                        </div>
                    </div>
                    :
                    <NoCartItems></NoCartItems>
            }
        </div>
    );
};

export default MyCart;
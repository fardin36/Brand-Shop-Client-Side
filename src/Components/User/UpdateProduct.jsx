import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, image, name, brand, type, price, rating, description, } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { image, name, brand, type, price, rating, description, }
        console.log(updatedProduct);

        // send data to server
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'DONE'
                    })
                }
                form.reset();
            })

    }

    return (
        <div className="min-h-screen flex justify-center items-center w-full px-6 md:px-20 pt-14">
            <form className="w-full" onSubmit={handleUpdateProduct}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="image" defaultValue={image} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" defaultValue={name} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="brand" defaultValue={brand} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand name</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="type" defaultValue={type} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Category</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="decimal" name="price" defaultValue={price} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="decimal" name="rating" defaultValue={rating} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rating</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" defaultValue={description} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#ffb300] peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffb300] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short description</label>
                    </div>
                </div>
                <button type="submit" className="text-white bg-[#ffb300] hover:bg-[#ffb300d5] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Update Products</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
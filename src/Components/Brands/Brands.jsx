import { Link } from "react-router-dom";

const Brands = () => {

    const brands = [
        {
            "brand_name": "Apple",
            "brand_image": "https://i.ibb.co/WF5MZxp/pasted-image-0.png",
            "slogan": "Think Different."
        },
        {
            "brand_name": "Samsung",
            "brand_image": "https://i.ibb.co/mSDNPWs/Samsung-Logo.jpg",
            "slogan": "Do what you can't."
        },
        {
            "brand_name": "Sony",
            "brand_image": "https://i.ibb.co/ZW70jLm/48486.jpg",
            "slogan": "Sony make.believe."
        },
        {
            "brand_name": "LG",
            "brand_image": "https://i.ibb.co/WPKxp3c/lg-electronics-800x450-bba71b2a-7056-49b2-ad88-6ab1157e1e74.png",
            "slogan": "Life's Good."
        },
        {
            "brand_name": "Microsoft",
            "brand_image": "https://i.ibb.co/jTPvd64/J2-DO766-ODBKLRG2-I7-CANEGU5-ZY.jpg",
            "slogan": "We believe in what people make possible."
        },
        {
            "brand_name": "Canon",
            "brand_image": "https://i.ibb.co/WB5rCV9/Canon-EOS-Webcam-Utility-New-update-available-1280x720.jpg",
            "slogan": "Delighting You Always."
        }
    ]

    return (
        <div className="min-h-screen flex flex-wrap justify-center items-center gap-5 px-3">
            {
                brands.map(item => <Link key={item.brand_name} to={`/brands/${item.brand_name}`} className="card bg-base-100 shadow-xl image-full h-56 w-96 rounded-lg bg-none">
                    <figure className="h-full w-full bg-none"><img className="h-full w-full bg-none dark:bg-none" src={item.brand_image} alt="Apple" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.brand_name}</h2>
                        <p>{item.slogan}</p>
                        <div className="card-actions justify-end">
                            <button className="btn rounded-lg">Shop now</button>
                        </div>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Brands;
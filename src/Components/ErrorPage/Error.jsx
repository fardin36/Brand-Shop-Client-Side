import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-black">
                <h1 className="text-9xl font-extrabold tracking-widest text-white">404</h1>
                <div className="px-2 text-sm font-medium rounded rotate-12 absolute bg-black text-white border border-white">
                    Page Not Found
                </div>
                <Link to="/" className="border px-5 py-3 text-white rounded-lg font-medium">Go Home</Link>
            </main>
        </div>
    );
};

export default Error;
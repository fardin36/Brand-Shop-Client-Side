import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

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

    if (user) {
        return children;
    }

    return <Navigate stete={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;
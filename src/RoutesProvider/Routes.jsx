import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Products from "../Components/Brands/Products";
import Home from "../Components/HomePage/Home";
import ProductDetails from "../Components/Brands/ProductDetails";
import AddProduct from "../Components/User/AddProduct";
import UpdateProduct from "../Components/User/UpdateProduct";
import MyCart from "../Components/User/MyCart";
import Login from "../Components/User/Login";
import Register from "../Components/User/Register";
import Error from "../Components/ErrorPage/Error";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/brands/:name',
                element: <Products></Products>,
                loader: () => fetch(`http://localhost:5000/products`),
            },
            {
                path: '/products/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/add-product',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>,
            },
            {
                path: '/update-product/:id',
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/my-cart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: () => fetch(`http://localhost:5000/cart`),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
]);

export default router;
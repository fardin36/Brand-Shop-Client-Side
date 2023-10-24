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
                element: <ProductDetails></ProductDetails>,
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/update-product/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/my-cart',
                element: <MyCart></MyCart>,
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
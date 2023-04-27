import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/resgister/Register";
import Blog from "../pages/blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <MainLayout />,
        children : [
            {
                path : "/",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            },
            {
                path : "/blog",
                element : <Blog />
            },

        ]
    }
])
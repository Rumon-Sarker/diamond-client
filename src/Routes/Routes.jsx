import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shop/Shop/Shop";
import Blogs from "../pages/Blogs/Blogs";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivetRoutes from "./PrivetRoutes";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/404",
                element: <NotFound></NotFound>
            },
            {
                path: "*",
                element: <Navigate to={"/404"}></Navigate>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/cart",
                element: <PrivetRoutes><Cart></Cart></PrivetRoutes>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }

        ]
    },
]);
import { CiMenuFries } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navber = () => {
    const withouSidebarRoutes = ["/404", "/login", "/signup"];
    const { pathname } = useLocation();
    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    // navbar custom styling
    const navActiveStle = ({ isActive }) => {
        return {
            borderBottom: "2px solid transparent",
            transition: "border-color 0.9s",
            borderBottomColor: isActive ? "red" : "",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "white",
            backgroundColor: isActive ? "transparent" : "",
        }
    }

    // navitmes 
    const navItems = <>
        <li className="text-xl"><NavLink to={"/"} style={navActiveStle}>Home</NavLink></li>
        <li className="text-xl"><NavLink to={"/shop"} style={navActiveStle}>Shop</NavLink></li>
        <li className="text-xl"><NavLink to={"/blogs"} style={navActiveStle}>Blog</NavLink></li>
        <li className="text-xl"><NavLink to={"/about"} style={navActiveStle}>About Us</NavLink></li>
        <li className="text-xl"><NavLink to={"/contact"} style={navActiveStle}>Contact</NavLink></li>
    </>
    return (
        <div className="navbar md:bg-black bg-gray-700 text-white md:px-52 pb-12 red">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn text-2xl font-bold btn-ghost lg:hidden">
                        <CiMenuFries />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-8 mt-3 z-[1] p-5 shadow md:bg-black bg-gray-700  rounded-box w-52">
                        {navItems}
                    </ul>

                </div>
                <Link to={"/"} className="btn btn-ghost text-xl md:text-3xl"><span className="md:text-5xl"><IoDiamondOutline /></span> Diamond </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal lg:gap-6 px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end md:gap-4 gap-2">
                <Link to={"/cart"} className="md:text-3xl gap-0 text-xl">
                    <button className="btn bg-gray-300">
                        <h1 className="text-2xl"><FaShoppingBag /></h1>
                        <div className="mb-4 text-xl -ml-2">+0</div>
                    </button>
                </Link>
                <Link to={"/shop"} className="border-2 p-2 rounded">Shop Now</Link>
            </div>
        </div>
    );
};

export default Navber;
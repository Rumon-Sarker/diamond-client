import { Outlet } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import Navber from "../../components/Navber/Navber";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import '@smastrom/react-rating/style.css';


const Main = () => {
    return (
        <div>

            <Toaster />
            <TopNav></TopNav>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
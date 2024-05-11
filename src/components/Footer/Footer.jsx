import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

    // withouSidebarRoutes 
    const withouSidebarRoutes = ["/404", "/login", "/signup"];
    const { pathname } = useLocation();
    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    return (

        <>
            <footer className="footer p-12 bg-gray-700 w-full py-28 md:bg-black text-white ">
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <p>Stau updated with our latest offers.</p>
                    <fieldset className="form-control w-full mt-5">
                        <div className="join">
                            <input type="text" placeholder="info@gamil.com" className="input bg-transparent rounded-md input-bordered border-white join-item" />
                            <button className="btn bg-red-500 join-item uppercase text-white font-bold">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
                <nav className="space-y-4">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="space-y-4">
                    <h6 className="footer-title">Company</h6>
                    <Link to={"/about"} className="link link-hover">About us</Link>
                    <Link to={"/contact"} className="link link-hover">Contact us</Link>
                    <Link to={"/blogs"} className="link link-hover">Blog</Link>
                    <Link to={"/shop"} className="link link-hover">Shop</Link>
                </nav>
                <nav className="items-center space-y-4 ">
                    <h6 className="footer-title">FOLLOW US</h6>
                    <div className="space-y-4 text-">
                        <Link target="_blank" to={"https://www.facebook.com/md.srrumon121"} className="flex items-center cursor-pointer gap-1"><FaFacebookF />Facebook</Link>
                        <Link target="_blank" to={"https://twitter.com/Rumon_Sarker1"} className="flex items-center cursor-pointer gap-1"><FaTwitter />Twitter</Link>
                        <Link target="_blank" to={"https://www.linkedin.com/in/md-rumon-sarker-589209241/"} className="flex items-center cursor-pointer gap-1"><FaLinkedinIn />Linkedin</Link>
                        <Link to={"/"} className="flex items-center cursor-pointer gap-1"><FaInstagram />Instaragram</Link>
                    </div>
                </nav>

            </footer>
            <footer className="footer footer-center pb-12  md:bg-black bg-gray-700 text text-white ">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Diamond Shop</p>
                </aside>
            </footer>
        </>

    );
};

export default Footer;
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
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="items-center space-y-4 ">
                    <h6 className="footer-title">FOLLOW US</h6>
                    <div className="space-y-4 text-">
                        <a className="flex items-center cursor-pointer gap-1"><FaFacebookF />Facebook</a>
                        <a className="flex items-center cursor-pointer gap-1"><FaTwitter />Twitter</a>
                        <a className="flex items-center cursor-pointer gap-1"><FaLinkedinIn />Linkedin</a>
                        <a className="flex items-center cursor-pointer gap-1"><FaInstagram />Instaragram</a>
                    </div>
                </nav>

            </footer>
            <footer className="footer footer-center pb-12  md:bg-black bg-gray-700 text text-white ">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>

    );
};

export default Footer;
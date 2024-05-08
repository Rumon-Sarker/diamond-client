import { useContext } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch, FaSignInAlt, FaSignOutAlt, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const TopNav = () => {

    const withouSidebarRoutes = ["/404", "/login", "/signup"];
    const { pathname } = useLocation();
    if (withouSidebarRoutes.some((item) => pathname.includes(item)))
        return null;

    const navigate = useNavigate();
    const { userSignOut, user } = useContext(AuthContext);
    const handaleSignOut = async () => {
        const res = await userSignOut()
            .then(result => {
                if (result) {
                    navigate("/")
                }
            })
            .catch(error => {
                console.log(error.message)
            })
        return res;
    }
    return (
        <>
            <div className="flex  pb-12 pt-4 justify-between p-2 md:justify-between bg-gray-700 md:bg-black mx-auto md:px-52">
                <div className="flex items-center gap-2 text-white">
                    <Link target="_blank" to={"https://www.facebook.com/md.srrumon121"}><FaFacebookF /></Link>
                    <Link target="_blank" to={"https://twitter.com/Rumon_Sarker1"}><FaTwitter /></Link>
                    <Link target="_blank" to={"https://www.linkedin.com/in/md-rumon-sarker-589209241/"}><FaLinkedinIn /></Link>
                    <Link to={"#"}><FaInstagram /></Link>
                    <p className="ml-3 text-sm">Need Help? Call: <span className="font-bold">017 8352 6467</span></p>
                </div>
                <div className="flex gap-4 md:gap-8 text-white text-xl">
                    <p className="cursor-pointer"><FaSearch /></p>
                    {

                        user ? <Link onClick={() => handaleSignOut()}><p><FaSignOutAlt /></p></Link>
                            : <Link target="_blank" to={"/login"}><p><FaSignInAlt /></p></Link>
                    }
                </div>
            </div>
        </>
    );
};

export default TopNav;
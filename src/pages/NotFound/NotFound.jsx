import { Link } from "react-router-dom";
import notFoundImg from "../../assets/BannerImg/not-found-3.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
const NotFound = () => {
    return (
        <div>
            <div className="italic md:mx-auto bg-slate-50">
                <Link className=" items-center w-24 text-black" to={"/"}>
                    <h1 className="text-xl flex items-center gap-1"><span className="text-4xl font-bold "><IoIosArrowRoundBack /></span> Go to home</h1>
                </Link>
            </div>
            <img className=" mx-auto w-screen  md:w-6/12" src={notFoundImg} alt="not-found" />
        </div>
    );
};

export default NotFound;
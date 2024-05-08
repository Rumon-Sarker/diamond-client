import { Link } from "react-router-dom";
import banner1 from "../../../assets/BannerImg/jewelrybanner1.jpg"
import banner2 from "../../../assets/BannerImg/jewelrybanner2.jpg"
import banner3 from "../../../assets/BannerImg/jewelrybanner4.jpg"
const Banner = () => {
    return (
        <>
            <div className="carousel h-full w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1}) ` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl md:text-8xl italic ">50% OFF</h1>
                                <p className="mb-5">Provident cupiditate volcitationem quasi. In deleniti </p>
                                <Link to={"/shop"}><button className="p-3 border-2 bg-transparent uppercase">Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-3xl text-white  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3">❮</a>
                        <a href="#slide2">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2}) ` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl md:text-6xl font-bold italic">Jewelry Shop</h1>
                                <p className="mb-5">Provident cupiditate 7ue aut repudiandae et a id nisi.</p>
                                <Link to={"/shop"}><button className="p-3 border-2 bg-transparent uppercase">Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-3xl text-white flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1">❮</a>
                        <a href="#slide3">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner3}) ` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl md:text-6xl font-bold italic">Pandora Rings </h1>
                                <p className="mb-5"> assumenda excepturi exercitationem quasi. In deleniti repudiandae et a id nisi.</p>
                                <Link to={"/shop"}><button className="p-3 border-2 bg-transparent uppercase">Shop Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute text-3xl text-white  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2">❮</a>
                        <a href="#slide1">❯</a>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Banner;
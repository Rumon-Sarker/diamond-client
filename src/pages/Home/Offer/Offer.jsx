import offerBg from "../../../assets/MoreImg/offer.jpg"
const Offer = () => {
    return (
        <>
            <div className="hero h-[520px] bg-fixed" style={{ backgroundImage: `url(${offerBg}) ` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="mb-5 text-8xl font-bold italic">Save 50%</h1>
                        <p className="mb-5 text-4xl">Shop Our Year-End Sale – Up To 50% Off</p>
                        <button className="p-3 border-2 bg-transparent uppercase">Shop Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Offer;
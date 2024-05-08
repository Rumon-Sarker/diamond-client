import moreImg1 from "../../assets/MoreImg/more01.jpg"

const ProductDetails = () => {
    return (
        <>
            <div className='lg:flex gap-12 bg-slate-50 py-12 md:px-52 mx-auto '>
                <div className=' my-auto md:w-1/2 mx-auto '>
                    <img className="" src={moreImg1} alt="Engesments" />
                </div>
                <div className=" md:w-1/2 my-auto mx-auto">
                    <p>Category</p>
                    <h1 className="text-2xl md:text-4xl font-bold my-12">Engagement of investment-worthy </h1>
                    <p className="text-xl">$ 500</p>
                    <p className='my-5 text-xl'>Discover our finely curated collection of investment-worthy diamonds and gemstones, breathtaking designs, and exceptional craftsmanship</p>
                    <button className=" mt-12 text-white font-bold w-44 h-16 bg-red-400 rounded-md uppercase border shadow border-gray-500">Add To Cart</button>
                </div>
            </div>
            <div className="md:px-52 bg-slate-50 ">
                <p className="text-2xl font-bold">DESCRIPTION</p>
                <h1 className="bg-gray-100 p-3">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</h1>
            </div>

        </>
    );
};

export default ProductDetails;
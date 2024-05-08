import { Link } from 'react-router-dom';
import moreImg1 from '../../../assets/MoreImg/more01.jpg'
import moreImg2 from '../../../assets/MoreImg/more02.jpg'
const More = () => {
    return (
        <>
            <div className='w-10/12 mx-auto my-12 md:px-52 md:-mt-32 md:relative'>
                <div className='md:flex bg-slate-50  '>
                    <div className=' md:w-1/2 w-full'>
                        <img src={moreImg1} alt="Engesments" />
                    </div>
                    <div className='md:w-1/2 w-full my-auto md:pl-5'>
                        <h1 className="text-2xl">Engagement</h1>
                        <p className='mt-4'>Discover our finely curated collection of investment-worthy diamonds and gemstones, breathtaking designs, and exceptional craftsmanship</p>
                        <Link to={"/shop"} className="btn p-2 mt-12 text-white hover:bg-black font-bold w-32 bg-red-600 rounded">More..</Link>
                    </div>
                </div>
                <div className='md:flex bg-slate-50  '>
                    <div className='md:w-1/2 w-full my-auto mx-auto md:pl-5'>
                        <h1 className="text-2xl">Jewelry</h1>
                        <p className='mt-4'>Discover our unriveled selection of must-have jewelry in timeless styles.</p>
                        <Link to={"/shop"} className="btn p-2 mt-12 text-white hover:bg-red-600 font-bold w-32 bg-black rounded">More..</Link>
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <img src={moreImg2} alt="Engesments" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default More;
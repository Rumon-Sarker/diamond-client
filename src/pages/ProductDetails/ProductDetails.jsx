import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const axiosBaseUrl = useAxios();
    const data = useLoaderData();
    const { name, title, price, img, category, star, description } = data;

    const handaleAddToCart = async () => {
        const cartInfo = {
            name,
            email: user?.email,
            price,
            img,
            title,
            category,
            star,
            description

        }
        const res = await axiosBaseUrl.post("/cart", cartInfo)
        if (res.data.insertedId) {
            refetch();
            toast.success("Items Added Success");

        }
    }

    return (
        <>
            <div className='lg:flex gap-12 bg-slate-50 py-12 md:px-52 mx-auto '>
                <div className=' my-auto md:w-1/2 mx-auto '>
                    <img className="" src={img} alt="Engesments" />
                </div>
                <div className=" md:w-1/2 my-auto mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold my-12">{name}</h1>
                    <p className="text-xl font-bold"> Price: $ <span className="font-normal">{price}</span></p>
                    <p className='my-5  font-bold text-xl'>Title: <span className="font-normal">{title}</span></p>
                    <p className="uppercase font-bold">Category: <span className="font-normal">{category}</span></p>

                    <p className='my-5 text-xl'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={star}
                            readOnly
                        ></Rating></p>

                    <button onClick={() => handaleAddToCart()} className=" mt-12 text-white font-bold w-44 h-16 bg-red-400 rounded-md uppercase border shadow border-gray-500">Add To Cart</button>
                </div>
            </div>
            <div className="md:px-52 bg-slate-50 ">
                <p className="text-2xl font-bold">DESCRIPTION</p>
                <h1 className="bg-gray-100 p-3">{description}</h1>
            </div>

        </>
    );
};

export default ProductDetails;
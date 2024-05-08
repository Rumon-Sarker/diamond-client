import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="md:px-52">
            <Helmet>
                <title>Diamond || Cart</title>
            </Helmet>
            <div className="h-96 bg-slate-200 pt-5">
                <p className="bg-gray-400 border-l-8 border-gray-500 text-white font-semibold mb-12 p-4"> Your Cart is currently empty</p>
                <Link to={"/shop"} className="border-2 btn p-2 ml-4 bg-red-100 rounded">Go to Shop Now</Link>
            </div>
        </div>
    );
};

export default Cart;
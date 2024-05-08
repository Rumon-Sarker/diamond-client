import { Helmet } from "react-helmet-async";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = [
        {
            "id": 1,
            "name": "Engagement Ring Diamonds 14K White Gold",
            "title": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.",
            "price": 339,
            "img": "https://i.ibb.co/18VSmdH/featured1.jpg",
            "category": "engajements",
            "star": 3,
            "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
        },
        {
            "id": 2,
            "name": "MESH SCARF EARRINGS  SCARF ",
            "title": "The form is malleable in the way the body’s and ergonomic in the way it drapes over the body's contours.",
            "price": 2899,
            "img": "https://i.ibb.co/kQHBgCb/featured2.jpg",
            "category": "bracelets",
            "star": 4,
            "description": "The form is in the way it drapes over the body’s malleable and ergonomic in the way it drapes over the body’s  contours. Earrings in sterling silver with round brilliant diamonds. Size small, 2.75″ long. Carat total weight .14. Original designs copyrighted by Elsa Peretti."
        }

    ];
    const totalAmmount = 43;
    return (
        <div className="md:px-52 bg-gray-100">
            <Helmet>
                <title>Diamond || Cart</title>
            </Helmet>

            {/* ToDo 
            
            if cart data available show cart otheraise hide cart */}

            {/* <div className="h-96 bg-slate-200 pt-5">
                <p className="bg-gray-400 border-l-8 border-gray-500 text-white font-semibold mb-12 p-4"> Your Cart is currently empty</p>
                <Link to={"/shop"} className="border-2 btn p-2 ml-4 bg-red-100 rounded">Go to Shop Now</Link>
            </div> */}
            <div>
                <div className="w-full pt-12 ">
                    <div className="space-y-4 w-96 rounded bg-gray-50 p-4 mx-auto md:mx-0 font-bold">
                        <h1 className="text-2xl font-bold">CART TOTALS</h1>

                        <h1 className="flex justify-between">TOTAL ITEMS: <span className="">{cartData?.length}</span></h1>
                        <h1 className="flex justify-between">SUBTOTAL: <span className="">$ {499}</span></h1>
                        <h1 className="flex justify-between border-b">DISCOUNT: <span>$ 00</span></h1>
                        <p className="flex justify-between">TOTAL: <span>$ {totalAmmount}</span> </p>
                        {
                            cartData?.length ? <Link to={"/dashboard/payments"}>
                                <button className="btn w-full hover:bg-gray-300 mt-3 hover:text-black hover:rotate-1   bg-green-100 font-bold rounded border-red-100 border-b-4 ">PROCEED TO CHECKOUT</button>
                            </Link>
                                : <button className="btn hover:bg-gray-300 hover:text-black hover:rotate-1  bg-green-100 font-bold rounded border-red-100 border-b-4 ">PROCEED TO CHECKOUT</button>

                        }
                    </div>

                    <div className=" mt-8">
                        <table className="table">
                            {/* head */}
                            <thead className="md:text-xl text-black font-bold">
                                <tr>
                                    <th>#</th>
                                    <th>Img</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData?.map((item, index) => (
                                    <tr key={index}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>$ {item.price}</td>
                                        <th>
                                            <button onClick={() => handaleDelete(item?._id)} className=" text-2xl btn-xs"><FaDeleteLeft /></button>
                                        </th>
                                    </tr>

                                ))}

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

import { Helmet } from "react-helmet-async";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Cart = () => {
    const [cartData, refetch] = useCart();
    const axiosBaseUrl = useAxios();


    // toTO Payment syestem  comming Soon............
    const handaleCheckOut = () => {
        Swal.fire({
            title: " Coming Soooooooon............",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    const handaleDelete = async (id) => {
        const res = await axiosBaseUrl.delete(`/cart/${id}`)
        if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Deleted Success")
        }
    }


    const totalAmmount = cartData.reduce((prevPrice, item) => prevPrice + item.price, 0);

    return (
        <div className="md:px-52 bg-gray-100">
            <Helmet>
                <title>Diamond || Cart</title>
            </Helmet>
            {/* if cartData > 0 then show this content otherwise hide this content  */}
            {
                cartData?.length > 0 ?
                    <div>
                        <div className="w-full pt-12 pb-32 ">
                            <div className="space-y-4 w-96 rounded bg-gray-50 p-4 mx-auto md:mx-0 font-bold">
                                <h1 className="text-2xl font-bold">CART TOTALS</h1>

                                <h1 className="flex justify-between">TOTAL ITEMS: <span className="">{cartData?.length}</span></h1>
                                <h1 className="flex justify-between">SUBTOTAL: <span className="">$ {totalAmmount}</span></h1>
                                <h1 className="flex justify-between border-b">DISCOUNT: <span>$ 00</span></h1>
                                <p className="flex justify-between">TOTAL: <span>$ {totalAmmount}</span> </p>
                                <button onClick={handaleCheckOut} className="btn w-full hover:bg-gray-300 mt-3 hover:text-black hover:rotate-1   bg-green-100 font-bold rounded border-red-100 border-b-4 ">PROCEED TO CHECKOUT</button>
                            </div>

                            <div className=" mt-8">
                                <table className="table">
                                    {/* head */}
                                    <thead className="md:text-xl text-black font-bold">
                                        <tr className="bg-gray-200">
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

                    // if cartdata length null then show this contnet otherwise hide this content 
                    :
                    <div className="h-96 bg-slate-200 pt-5">
                        <p className="bg-gray-400 border-l-8 border-gray-500 text-white font-semibold mb-12 p-4"> Your Cart is currently empty</p>
                        <Link to={"/shop"} className="border-2 btn p-2 ml-4 bg-red-100 rounded">Go to Shop Now</Link>
                    </div>
            }



        </div>
    );
};

export default Cart;
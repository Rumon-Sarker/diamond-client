import { Link } from "react-router-dom";


const BlogCart = ({ blog }) => {
    const { _id, name, title, img } = blog;
    return (
        <>
            <Link to={`/blogDetails/${_id}`}>
                <div className="card bg-base-100 shadow-md hover:bg-gray-200 hover:shadow-xl">
                    <img className="hover:blur-none blur-[1px]" src={img} alt="" />
                    <div className="card-body ">
                        <h2 className="card-title">{name}</h2>
                        <p>{title}</p>
                    </div>
                    <div className='my-2 ml-7'>
                        <Link className='btn p-4  w-48 bg-slate-300 text-black font-bold rounded hover:border-red-200 border-b-4 my-4 uppercase'>
                            Blog Details
                        </Link>
                    </div>
                </div>
            </Link>

        </>
    );
};
export default BlogCart;
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { name, title, img, description } = blog;

    return (
        <div className="md:px-52 py-12">
            <div className="card bg-base-100 shadow-md hover:bg-gray-200 hover:shadow-xl">
                <div className="md:flex my-auto">
                    <div className="card-body my-auto space-y-5">
                        <h2 className="card-title md:text-5xl">{name}</h2>
                        <p>{title}</p>
                    </div>
                    <img className="hover:blur-none md:w-[50rem] blur-[1px]" src={img} alt="" />
                </div>
                <div className="mx-auto bg-slate-50">
                    <h1 className="bg-gray-100 p-3 mb-12">{description}</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
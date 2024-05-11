import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BlogCart from "./BlogCart";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Blogs = () => {

    const axiosBaseUrl = useAxios();

    const { data: blogs } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await axiosBaseUrl.get("/blogs")
            return res.data;
        }
    })

    return (
        <div className="md:px-52  my-12">
            <Helmet>
                <title>Diamond || Blog</title>
            </Helmet>

            <div className=" mt-10 bg-gray-100 hover:bg-gray-200 p-12">
                <h1 className="text-3xl font-bold">Our <span className="text-red-500">Blog</span></h1>
                <p className="my-5">Praesentium rem sequi voluptatum velit tempore dicta
                    <br />dolor sit amet ex eum consectetur,debitis quibusdam ea rem vitae rem?.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 mt-20">
                {
                    blogs?.map((blog, index) => (
                        <BlogCart
                            key={index}
                            blog={blog}
                        ></BlogCart>
                    ))
                }
            </div>

        </div>
    );
};




export default Blogs;
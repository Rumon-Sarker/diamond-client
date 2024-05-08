import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        fetch("featured.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <section className="md:px-52 my-12">
                <h1 className="text-4xl font-bold my-12">FEATURED PRODUCTS</h1>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {items?.map((item, index) => (
                        <FeaturedCard key={index} item={item}>
                        </FeaturedCard>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Featured;
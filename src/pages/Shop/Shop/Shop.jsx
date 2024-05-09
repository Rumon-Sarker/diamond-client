import { useEffect, useState } from "react";
import FeaturedCard from "../../Home/Featured/FeaturedCard";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const Shop = () => {
    const [category, setCategory] = useState();
    const [searchValu, setSearchValue] = useState("");
    const [sortDataValue, setSortDataValue] = useState("");
    const [page, setPage] = useState(1);



    // product Data Feteching 
    const axiosBaseUrl = useAxios();

    const { data: allItems = [], refetch } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axiosBaseUrl.get("/allItems");
            return (res.data);
        }
    });


    // finding category
    const accessories = allItems?.filter(items => (items?.category === "accessories"));
    const bracelets = allItems?.filter(items => (items?.category === "bracelets"));
    const engajements = allItems?.filter(items => (items?.category === "engajements"));
    const gift = allItems?.filter(items => (items?.category === "gift"));
    const jewelry = allItems?.filter(items => (items?.category === "jewelry"));
    const watches = allItems?.filter(items => (items?.category === "watches"));

    const product = category ? allItems?.filter((items) => items?.category === `${category}`) : allItems;
    const searchItems = product?.filter((items) => items?.name.toLowerCase().includes(searchValu.toLowerCase()));
    const sortData = searchItems?.sort((prevItem, nextItem) => prevItem[sortDataValue] - nextItem[sortDataValue]);



    // Sample array of objects

    // Function to paginate array of objects
    function paginate(data, page, perPage = 1) {
        const start = (page - 1) * perPage;
        const end = start + perPage;

        return data.slice(start, end);
    }

    let perPage = 5;
    const paginatedData = paginate(sortData, page, perPage);

    useEffect(() => {

    }, [page])

    const handalePrev = () => {
        setPage(page - 1)
    };
    const handaleNext = () => {
        setPage(page + 1)
    };
    console.log(page)

    // product serching handaler 
    const handaleSerach = (e) => {
        setSearchValue(e.target.value)
    }

    // Product Soritng Handaler 
    const sortingData = (e) => {
        setSortDataValue(e.target.value);

    }
    return (
        <>
            <section className="md:flex md:px-52  my-12">
                {/* Category Sections  */}
                <div className="md:w-3/12 p-4 bg-slate-100">
                    <h1 className="text-xl font-bold border-b pb-4">SEARCH FOR PRODUCT</h1>
                    <label className="input input-bordered flex my-3 items-center gap-2">
                        <input type="text" onChange={handaleSerach} className="grow border-r" placeholder="Search Products.." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <h1 className="text-xl font-bold border-b my-4 pb-4">PRODUCT CATEGORIES</h1>
                    <div className="flex flex-col items-start space-y-3">
                        <button onClick={() => setCategory()}>All Products-- ( {allItems ? allItems.length : 0} )</button>
                        <button onClick={() => setCategory("accessories")}>Accessories-- ( {accessories ? accessories.length : 0} )</button>
                        <button onClick={() => setCategory("bracelets", setPage(1))}>Bracelets-- ( {bracelets ? bracelets.length : 0} )</button>
                        <button onClick={() => setCategory("engajements", setPage(1))}>Engajements-- ( {engajements ? engajements.length : 0} )</button>
                        <button onClick={() => setCategory("gift", setPage(1))}>Gift- ( {gift ? gift.length : 0} )</button>
                        <button onClick={() => setCategory("jewelry", setPage(1))}>Jewelry-- ( {jewelry ? jewelry.length : 0} )</button>
                        <button onClick={() => setCategory("watches", setPage(1))}>Watches-- ( {watches ? watches.length : 0} )</button>
                    </div>
                </div>
                {/* Product Sections  */}
                <div className="md:w-9/12 mx-auto bg-gray-50">
                    <h1 className="text-2xl md:text-4xl md:font-bold border-b-2  pb-3 uppercase ">{category ? category : "All Products"}</h1>
                    <div className="flex items-center justify-between my-12">
                        <h1> SHOWING {sortData ? paginatedData?.length : 0} Out OF {allItems ? sortData?.length : 0} RESULT</h1>
                        <select onClick={sortingData} className="select select-bordered max-w-xs">
                            <option disabled selected defaultValue={""}>SORTING</option>
                            <option value={"name"}>Sort By Name</option>
                            <option value={"price"}>Sort By Price</option>
                        </select>
                    </div>
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        {paginatedData?.map((item, index) => (
                            <FeaturedCard key={index} item={item}>
                            </FeaturedCard>
                        ))}
                    </div>
                    {/* button conditonail showing  */}
                    <div className="py-12 mx-auto flex">
                        {
                            sortData?.length < 6 ?
                                "" :
                                <div className="join  mx-auto">
                                    <button className="join-item btn" disabled={page === 1} onClick={handalePrev}>«</button>
                                    <button className="join-item btn">Page {page}</button>
                                    {
                                        paginatedData?.length < 5 ? <button disabled className="join-item btn">»</button>
                                            : <button className="join-item btn" onClick={handaleNext}>»  </button>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
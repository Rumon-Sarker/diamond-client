import { Helmet } from "react-helmet-async";
import ProductDetails from "../ProductDetails/ProductDetails";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Diamond || Blog</title>
            </Helmet>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Blogs;
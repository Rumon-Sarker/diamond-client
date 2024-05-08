import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import More from "../More/More";
import Offer from "../Offer/Offer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Diamond</title>
            </Helmet>
            <Banner></Banner>
            <More></More>
            <Offer></Offer>
            <Featured></Featured>

        </div>
    );
};

export default Home;
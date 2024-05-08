import { Helmet } from "react-helmet-async";
import aboutImg from "../../assets/AboutImg/daimond-about.jpg"
const About = () => {
    return (
        <div>
            <Helmet>
                <title>Diamond || About</title>
            </Helmet>
            <div className="hero min-h-screen bg-neutral-900 text-white md:px-52">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-12">
                    <img src={aboutImg} className="max-w-md md:max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="border-4 border-gray-400   w-20 mt-2"></p>
                        <p className="py-6 text-xl italic">Quality That stands the test of time</p>
                        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.
                            <br />
                            <br />Curabitur ullamcorper ultricies nisi.ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus. eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.</p>

                        <ol className="list-disc ml-4 text-xl text-red-100 font-semibold space-y-3 my-12">
                            <li>Latest Designs</li>
                            <li>Premium Quality</li>
                            <li>Peerless Brands</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
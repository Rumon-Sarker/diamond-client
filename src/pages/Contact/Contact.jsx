import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();

    const handaleAdditmes = async (data) => {

        const menuItmes = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            title: data.title,
            descriptions: data.descriptions,

        };
        reset();
    }
    return (

        <div className="md:px-52 bg-slate-100 py-12">
            <Helmet>
                <title>Diamond || Contact</title>
            </Helmet>
            <div className="mx-auto">
                <h1 className="text-4xl  font-bold mb-12 shadow-lg">Contuct Us </h1>

                <div className="md:flex bg-gray-200 md:rounded-full mx-auto">
                    <div className="md:w-96 mx-auto space-y-6 p-12 rounded ">
                        <p className="flex gap-3"><span className="text-xl font-bold"><FaLocationPin></FaLocationPin> </span>  Uttara,Dhaka,Bangladesh</p>
                        <p className="flex gap-3"><span className="text-xl font-bold"><MdEmail /> </span>  mdsrrumon1234@gmail.com</p>
                        <p className="flex gap-3"><span className="text-xl font-bold"><FaPhoneAlt></FaPhoneAlt> </span>   017 8352 6467</p>

                    </div>

                    <div className="md:w-96 mx-auto space-y-6 p-12 rounded ">
                        <Link target="_blank" to={"https://www.facebook.com/md.srrumon121"} className="flex items-center cursor-pointer gap-1"><FaFacebookF />Facebook</Link>
                        <Link target="_blank" to={"https://twitter.com/Rumon_Sarker1"} className="flex items-center cursor-pointer gap-1"><FaTwitter />Twitter</Link>
                        <Link target="_blank" to={"https://www.linkedin.com/in/md-rumon-sarker-589209241/"} className="flex items-center cursor-pointer gap-1"><FaLinkedinIn />Linkedin</Link>
                        <Link to={"/"} className="flex items-center cursor-pointer gap-1"><FaInstagram />Instaragram</Link>

                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(handaleAdditmes)} className="card-body">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-500 text-center my-8">Send us a message</h1>
                <div className="md:flex gap-2 items-center">
                    <div className="form-control w-full">
                        <input  {...register("firstName")} type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full mt-3 md:mt-0">
                        <input  {...register("lastName")} type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-3">
                    <input  {...register("email")} type="email" placeholder=" Email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-3">
                    <input  {...register("title")} type="text" placeholder="Message Title" className="input input-bordered" required />
                </div>
                <label className="form-control mt-3">
                    <textarea {...register("descriptions")} className="textarea textarea-bordered h-52" placeholder="Message Descriptions" required></textarea>
                </label>
                <div className=" mt-">
                    <button className="btn p-4  w-48 bg-slate-300 text-black font-bold rounded hover:border-red-200 border-b-4 my-4 uppercase">Send</button>
                </div>
            </form>

        </div>

    );
};

export default Contact;
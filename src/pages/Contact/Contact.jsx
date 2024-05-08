import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaMailBulk, FaPhoneAlt, FaVoicemail } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
        console.log(menuItmes);
    }
    return (

        <div className="md:px-52 bg-slate-100 py-12">
            <Helmet>
                <title>Diamond || Contact</title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold">Contuct Us </h1>
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
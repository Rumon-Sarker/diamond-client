import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate();
    const { signUp } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handaleSignUp = async (data) => {
        const email = data.email;
        const password = data.password;
        const res = await signUp(email, password)
            .then(result => {
                if (result.user) {
                    navigate("/")
                    toast.success("Login Success");
                }

            })
        return res;
    }
    return (
        <>
            <div className="md:px-52 ">
                <div className="hero w-full glass">
                    <div className="hero-content flex-col  bg-gray-00 bg-opacity-80 w-full">
                        <div className="card shrink-0 w-full  max-w-2xl shadow-2xl shadow-black bg-base-100">
                            <h1 className='text-3xl font-bold ml-9 pt-5'>Sign-Up Now</h1>
                            <form onSubmit={handleSubmit(handaleSignUp)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' {...register("password", { required: true, minLength: 6 })} className="input input-bordered" placeholder="Password" />
                                    {errors.password && errors.password.type && <span className="text-red-700 mt-1">Password min 6 </span>}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" className="checkbox checkbox-md" required />
                                    <p>Yes! I want to receive special offers and more about Devolutions products and services. </p>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn text-xl bg-slate-200 text-black font-bold rounded border-red-200 border-b-4 my-4 uppercase' type="submit" value="Sign-Up" />

                                </div>
                                <div className="divider">OR</div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className='pb-4 ml-9'>{`Your havean't account please..`}<span className='text-blue-500 underline'><Link to="/login">Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const handaleLogin = async (data) => {
        const email = data.email;
        const password = data.password;
        const res = await signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success("Login Success");
                };
                reset()
            })
            .catch(error => {
                console.log(error.message)
            })
        return res;
    }
    return (
        <>
            <div className="md:px-52 ">
                <div className="hero w-full glass">
                    <div className="hero-content flex-col  bg-gray-00 bg-opacity-80 w-full">
                        <div className="card shrink-0 w-full mt-32  max-w-2xl shadow-2xl shadow-black bg-base-100">
                            <h1 className='text-3xl font-bold ml-9 pt-5 '>Login Now</h1>
                            <form onClick={handleSubmit(handaleLogin)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                    {errors.email && <span className='text-red-700'>Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password" name='password' {...register("password", { required: true })} className="input input-bordered" placeholder="Password" />

                                    {errors.password && <span className='text-red-700'>Password is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn text-xl bg-slate-200 text-black font-bold rounded border-red-200 border-b-4 my-4 uppercase' type="submit" value="Login" />
                                </div>
                                <div className="divider">OR</div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className='pb-4 text-center'>{`Your havean't account please..`}<span className='text-blue-500 underline'><Link to="/signup">SignUp</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
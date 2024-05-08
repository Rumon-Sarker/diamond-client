import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const { socailLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handaleGooleSignUp = async () => {
        const res = await socailLogin()
            .then(result => {
                if (result.user) {
                    navigate("/");
                    toast.success("Login Success");
                }
            })
            .catch(error => {
                console.log(error.message)
            })
        return res;
    }



    return (
        <div>
            <div className="w-32 mb-2 form-control text-center mx-auto">
                <input onClick={handaleGooleSignUp} className="btn peralta-regular text-2xl  bg-slate-200 text-red-900 font-bold rounded-full border-red-200 border-b-4 mb-1  " type="submit" value="Google" />
            </div>
        </div>
    );
};

export default SocialLogin;
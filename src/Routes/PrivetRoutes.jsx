import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading flex  mx-auto mt-32 bg-gradient-to-tr bg-red-300 loading-spinner loading-lg"></span>
    }
    else if (user) {
        return children
    }

    return <Navigate to="/login" />

};

export default PrivetRoutes;

import { useContext } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";

const useCart = () => {
    const axiosBaseUrl = useAxios();
    const { user } = useContext(AuthContext);

    const { data: cartData, refetch } = useQuery({
        queryKey: ["cartData"],
        queryFn: async () => {
            const res = await axiosBaseUrl.get(`/cart/${user?.email}`);
            return res.data;
        }
    })
    return [cartData, refetch]

};

export default useCart;
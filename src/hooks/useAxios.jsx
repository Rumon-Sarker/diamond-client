import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: "https://diamond-server-opal.vercel.app/"
})

const useAxios = () => {
    return axiosBaseUrl;
};

export default useAxios;
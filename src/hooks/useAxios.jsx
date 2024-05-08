import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxios = () => {
    return axiosBaseUrl;
};

export default useAxios;
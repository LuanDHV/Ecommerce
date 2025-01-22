import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;

import Axios, { AxiosInstance } from "axios";

let axios: AxiosInstance; // tanpa authrization
let axiosWithAuth: AxiosInstance; // dengan authorization

axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8080/api",
});

axiosWithAuth = Axios.create({
  // cookies (?)
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8080/api",
  withCredentials: true,
});

export { axios, axiosWithAuth };


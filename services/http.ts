import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
});

export default http;

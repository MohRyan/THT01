import axios from "axios";

export const API = axios.create({
    // baseURL: `https://dumb-flix-be.vercel.app/`,
    baseURL: `http://localhost:4000/`,
});

export const setAuthToken = (token?: string) => {
    if (token) {
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common["Authorization"];
    }
};
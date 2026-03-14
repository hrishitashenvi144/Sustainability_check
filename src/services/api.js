import axios from "axios";

const API = axios.create({
    baseURL: "https://eco-ledger.onrender.com/api"
});

export const postResource = (data) => API.post("/resources", data);

export const getResources = () => API.get("/resources");

export const getImpact = (id) => API.get(`/impact/${id}`);
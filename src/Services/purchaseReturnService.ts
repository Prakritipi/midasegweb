import axios from "axios";

const API = axios.create({
    baseURL: "https://your.api.endpoint/api",
});

export const fetchPurchaseReturns = () => API.get("/purchase-returns");
export const createPurchaseReturn = (data: any) => API.post("/purchase-returns", data);
export const deletePurchaseReturn = (id: string) => API.delete(`/purchase-returns/${id}`);

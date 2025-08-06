import API from "../Services/axiosInstance";

// Get all purchase returns
export const fetchPurchaseReturns = () =>
    API.get("/purchase-returns").then(res => res.data);

// Create new purchase return
export const createPurchaseReturn = (data: any) =>
    API.post("/purchase-returns", data).then(res => res.data);

// Update a purchase return
export const updatePurchaseReturn = (id: string, data: any) =>
    API.put(`/purchase-returns/${id}`, data).then(res => res.data);

// Delete a purchase return
export const deletePurchaseReturn = (id: string) =>
    API.delete(`/purchase-returns/${id}`).then(res => res.data);

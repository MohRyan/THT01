import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/api";

export const getProductAsync = createAsyncThunk(
    "product",
    async () => {
        try {
            const res = await API.get("products")
            const product = res.data

            return product
        } catch (error) {
            throw new Error("error")
        }
    }
)

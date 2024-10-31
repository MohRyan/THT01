import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/api";

export const getCartAsync = createAsyncThunk(
    "cart",
    async () => {
        try {
            const res = await API.get("cart")

            return res.data
        } catch (error) {
            throw new Error("error")
        }
    }
)
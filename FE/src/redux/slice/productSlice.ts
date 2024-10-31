import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/state";
import { getProductAsync } from "../async/productAsync";


// const initialState: IProduct[] = [{
//     id: undefined,
//     name_product: "",
//     description: "",
//     price: undefined,
//     stock: undefined,
//     image: "",
//     cartId: undefined
// }]

interface IProductSTate {
    products: IProduct[]
}
const initialState: IProductSTate = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        PRODUCT: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getProductAsync.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.products = action.payload

                }
            )
            .addCase(getProductAsync.rejected, (state) => {
                state.products = [];
            })

    },
})

export const { PRODUCT } = productSlice.actions;
export default productSlice.reducer;
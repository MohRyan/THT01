import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart } from "../types/state"
import { getCartAsync } from "../async/cartAsync"

interface ICartSTate {
    cart: ICart[]
}
const initialState: ICartSTate = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        CART: (state, action: PayloadAction<ICart[]>) => {
            state.cart = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getCartAsync.fulfilled,
                (state, action: PayloadAction<ICart[]>) => {
                    state.cart = action.payload

                }
            )
            .addCase(getCartAsync.rejected, (state) => {
                state.cart = [];
            })

    },
})

export const { CART } = cartSlice.actions;
export default cartSlice.reducer;
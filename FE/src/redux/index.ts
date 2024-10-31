import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks that have been given a static type
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
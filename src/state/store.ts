import { configureStore } from "@reduxjs/toolkit";
import shop from "./slices/shop";

export const store = configureStore({reducer:{
    shop,
}})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

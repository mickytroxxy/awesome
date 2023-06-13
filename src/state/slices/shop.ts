import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Categories, Shop } from "../../types/type";

const initialState: { items: Shop[]; cartItems: Shop[],categoryObjects:Categories[] } = {
  items: [],
  cartItems: [],
  categoryObjects:[]
};

const shopSlice = createSlice({
  name: "shopSlice",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Shop[]>) => {
      return { ...state, items: action.payload };
    },
    setCartItems: (state, action: PayloadAction<Shop[]>) => {
      return { ...state, cartItems: action.payload };
    },
    setCategoryObjects: (state, action: PayloadAction<Categories[]>) => {
      return { ...state, categoryObjects: action.payload };
    },
  },
});

export const { setCartItems, setItems,setCategoryObjects } = shopSlice.actions;
export default shopSlice.reducer;

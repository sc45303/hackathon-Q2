import { Cart } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const CartSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = CartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default CartSlice.reducer;

import { products } from "@/app/utils/mock";
import { Product } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Product[] = products;

export const ProductSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = ProductSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default ProductSlice.reducer;

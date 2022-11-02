import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemQuantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemExists = state.cartItems.find(
        (item) => item.name === action.payload.name
      );
      if (itemExists === undefined) {
        state.cartItems.push(action.payload);
      }
      state.itemQuantity++;
      state.total += parseFloat(action.payload.price);
    },
    removeItem(state, action) {
      const idx = state.cartItems.indexOf(action.payload.name);
      state.cartItems.splice(idx, 1);
      state.itemQuantity--;
      state.total -= parseFloat(action.payload.price);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

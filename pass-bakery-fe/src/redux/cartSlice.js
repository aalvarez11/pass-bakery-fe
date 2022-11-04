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
      state.cartItems.push(action.payload);
      state.itemQuantity++;
      state.total += parseFloat(action.payload.price);
    },
    removeItem(state, action) {
      const itemIdx = action.payload;
      const itemPrice = state.cartItems[itemIdx].price;
      state.cartItems.splice(itemIdx, 1);
      state.itemQuantity--;
      state.total -= parseFloat(itemPrice);
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

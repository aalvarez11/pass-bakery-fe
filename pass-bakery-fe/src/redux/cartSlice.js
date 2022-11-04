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
      const itemName = action.payload;
      const itemPrice = state.cartItems.find(
        (item) => item.name === itemName
      ).price;
      const numMatches = state.cartItems.reduce(
        (n, item) => n + (item.name === itemName),
        0
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== itemName
      );
      state.itemQuantity -= numMatches;
      state.total -= parseFloat(itemPrice) * numMatches;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

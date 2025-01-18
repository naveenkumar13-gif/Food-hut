import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  quantity: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaceItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const { addItem, decreaseItem, deleteItem, increaceItem } =
  cartSlice.actions;
export default cartSlice.reducer;

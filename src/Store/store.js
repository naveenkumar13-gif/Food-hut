import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import CartSlice from "./CartSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    cart: CartSlice,
  },
});

export default store;

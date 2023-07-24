import { combineReducers } from "redux"
import { cartItemCountSlice } from "./cartItemCountReducer"
import { configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "./cartReducer"

const rootReducer = combineReducers ({
  cartItemCount: cartItemCountSlice.reducer,
  cart: cartSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})
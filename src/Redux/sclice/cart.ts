import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CounterState } from "../../types/CartItemsType";

// Initial state now includes a cart array
const initialState: CounterState = {
  cart: [], // Initialize the cart array in state
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    pushToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      

      // Find the index of the existing item in the cart
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, update its quantity
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // Item does not exist in the cart, add it

        state.cart.push(item);
      }

      console.log(state.cart.length);
    },
    removefromcart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      // state.cart.push(item);

      // Find the index of the existing item in the cart
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
          // Item already exists in the cart, update its quantity
          state.cart[existingItemIndex].quantity -= 1;
      
          if (state.cart[existingItemIndex].quantity === 0) {
            state.cart.splice(existingItemIndex, 1);
            // console.log(state.cart.length);

          }
       
      }

      // console.log(state.cart.length);
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushToCart ,removefromcart } = counterSlice.actions;

export default counterSlice.reducer;

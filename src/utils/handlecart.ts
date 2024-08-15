import { useDispatch } from "react-redux";

// import { CartItemsType } from "./App";
import { getProducts } from "../Api/ShopingCartFetch";
// Fetch products from the API
import { CartItem, CartItemsType } from "../types/CartItemsType";
import { pushToCart, removefromcart } from "../Redux/sclice/cart";


export const useHandleAddCart = (id: number, name: string, image: string) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    const cartItem: CartItem = { id, name, quantity: 1, image };
    dispatch(pushToCart(cartItem));
  };

  return handleAddCart;
  
};

// Handle removing items from the cart
export const useHandleRemoveCart = (id: number, name: string, image: string) => {
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    const cartItem: CartItem = { id, name, quantity: 1, image };
    dispatch(removefromcart(cartItem));
  };

  return handleRemoveCart;
};

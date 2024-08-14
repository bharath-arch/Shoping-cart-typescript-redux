
import { CartItemsType } from "../types/CartItemsType";


export const getProducts = async (): Promise<CartItemsType[]> => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
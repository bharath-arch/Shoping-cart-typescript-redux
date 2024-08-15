
import { StoreUrl } from "../Constants/Urls";
import { CartItemsType } from "../types/CartItemsType";


export const getProducts = async (): Promise<CartItemsType[]> => {
    const response = await fetch(StoreUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
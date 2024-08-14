import React from "react";
import { useQuery } from "react-query";
import LinearProgress from "@mui/material/LinearProgress";
// import type { RootState } from "./Redux/store";
import { useDispatch } from "react-redux";

// import { CartItemsType } from "./App";
import { getProducts } from "./Api/ShopingCartFetch";
// Fetch products from the API
import { CartItem, CartItemsType } from "./types/CartItemsType";
import { pushToCart, removefromcart } from "./Redux/sclice/cart";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery<CartItemsType[]>(
    ["products"],
    getProducts
  );

  // Handle adding items to the cart
  const handleAddCart = (id: number, name: string , image: string) => {
    const cartItem: CartItem = { id, name, quantity: 1 , image};

    dispatch(pushToCart(cartItem));
  };

  // Handle removing items from the cart
  const handleRemoveCart = (id: number, name: string, image: string) => {
    const cartItem: CartItem = { id, name, quantity: 1 , image };
    dispatch(removefromcart(cartItem));
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>An error occurred: {(error as Error).message}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-3 justify-center p-5 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-60 min-h-96 flex  flex-col place-items-center p-3 border relative"
          >
            <img src={item.image} className="w-20 h-20" />
            <ul className="text-center">
              <li className="mt-10">{item.title}</li>
              {/* <li>{item.description}</li> */}
              <li className="text-2xl font-semibold">{item.price} &#8377; </li>
            </ul>
            <div className=" flex flex-col  gap-2 mt-10 absolute bottom-4">
              <button className=" p-1 flex gap-3 items-center">
                <span
                  className="border border-black p-1"
                  onClick={() => handleAddCart(item.id, item.title, item.image)}
                >
                  {" "}
                  &#43;
                </span>
                Add to Cart{" "}
                <span
                  className="border border-black p-1"
                  onClick={() => handleRemoveCart(item.id, item.title , item.image)}
                >
                  &minus;
                </span>
              </button>
              <button className="border border-black p-1 ">buY</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;

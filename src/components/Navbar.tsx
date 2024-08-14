import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import Cart from "./cart/Cart";

const Navbar: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);
  const [isCartActive, setIsCartActive] = useState(false);  
  return (
    <>
      <ul className="flex justify-between px-10 py-5 items-center border">
        <li className="font-bold text-4xl italic">Shop</li>
        <li className="absolute right-10">
          <span className="cursor-pointer" onClick={() => {setIsCartActive(!isCartActive)}}>
            Cart
          </span>
          <span className="relative top-[-0.5rem] text-red-500">
            {cartsval.length}
          </span>
        </li>
      </ul>
      <div className="absolute right-10">
        <Cart active={isCartActive}/>
      </div>
    </>
  );
};

export default Navbar;

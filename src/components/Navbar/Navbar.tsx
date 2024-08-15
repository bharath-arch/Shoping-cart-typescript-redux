import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);

  const [istoggke, setIstoggke] = useState(false);

  // const [isCartActive, setIsCartActive] = useState(false);
  return (
    <>
      <ul className="flex justify-between px-10 py-5 items-center border">
        <li className="text-2xl font-semibold text-indigo-600">ShopEase</li>
        <div className="hidden gap-10  md:flex">
          <li className="cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <span>
              <Link to={"/cart"}>Cart</Link>
            </span>
            <span className="relative top-[-0.5rem] right-0 select-none bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cartsval.length}
            </span>
          </li>
          <li className="cursor-pointer">
            <Link to={"about"}>AboutUs</Link>
          </li>
        </div>
        <div
          className=" gap-10  md:hidden"
          onClick={() => setIstoggke(!istoggke)}
        >
          Open
        </div>
      </ul>{" "}
      {istoggke && (
        <>
          <div className="relative z-10 md:hidden">
            {/* Triangle indicator */}
            <span className="absolute right-[2.75rem] top-[-1rem] w-8 h-8 bg-slate-100 transform rotate-45"></span>

            {/* Dropdown menu */}
            <div className="absolute right-8 top-0  bg-white shadow-lg rounded-lg p-4 text-center ">
              <ul className="flex flex-col gap-4">
                <li className="cursor-pointer p-3">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer p-3 relative">
                  <Link to="/cart">Cart</Link>
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 select-none rounded-full">
                    {cartsval.length}
                  </span>
                </li>
                <li className="cursor-pointer p-3">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      {/* <div className="absolute right-10">
        <Cart />
      </div> */}
    </>
  );
};

export default Navbar;

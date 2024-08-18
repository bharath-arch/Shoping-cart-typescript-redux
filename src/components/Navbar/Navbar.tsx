import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { Link, useNavigate } from "react-router-dom";
import PathChecker from "../../PathChecker";

const Navbar: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);
  const [isActive, setIsActive] = useState("/");
  const navigate = useNavigate();
  useEffect(() => {
    const handlePathnameChange = () => {
      const query = window.location.pathname;
      // console.log(query);
      setIsActive(query);
    };

    // Run the function on initial render
    handlePathnameChange();

    // Add event listener to handle path changes if needed
    window.addEventListener("popstate", handlePathnameChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePathnameChange);
    };
  }, []);
  const [istoggke, setIstoggke] = useState(false);

  // const [isCartActive, setIsCartActive] = useState(false);
  return (
    <>
    <PathChecker/>
      <ul className="flex justify-between px-10 py-5 items-center border">
        <li className="text-2xl font-semibold text-indigo-600">ShopEase</li>
        <div className="hidden gap-10  md:flex">
          <li
            className={`cursor-pointer select-none ${
              isActive === "/" ? "text-red-500" : ""
            }`}
            onClick={() => setIsActive("/")}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`cursor-pointer select-none ${
              isActive === "/cart" ? "text-red-500" : ""
            }`}
            onClick={() => setIsActive("/cart")}
          >
            <span>
              <Link to={"/cart"}>Cart</Link>
            </span>
            <span className="relative top-[-0.5rem] right-0 select-none bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cartsval.length}
            </span>
          </li>
          <li
            className={`cursor-pointer select-none ${
              isActive === "/about" ? "text-red-500" : ""
            }`}
            onClick={() => setIsActive("/about")}
          >
            <Link to={"about"}>AboutUs</Link>
          </li>
          <li
            className={`cursor-pointer select-none `}
            onClick={() => {
              localStorage.removeItem("userEmail");
              navigate("/login");
            }}
          >
            Logout
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
                <li
                  className={`cursor-pointer select-none p-3 ${
                    isActive === "/" ? "text-red-500" : ""
                  }`}
                  onClick={() => setIsActive("/")}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`cursor-pointer p-3  select-none relative ${
                    isActive === "/cart" ? "text-red-500" : ""
                  }`}
                  onClick={() => setIsActive("/cart")}
                >
                  <Link to="/cart">Cart</Link>
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 select-none rounded-full">
                    {cartsval.length}
                  </span>
                </li>
                <li
                  className={`cursor-pointer p-3 select-none relative ${
                    isActive === "/about" ? "text-red-500" : ""
                  }`}
                  onClick={() => setIsActive("/about")}
                >
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

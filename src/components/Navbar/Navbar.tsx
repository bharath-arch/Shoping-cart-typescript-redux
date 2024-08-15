import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);
  // const [isCartActive, setIsCartActive] = useState(false);
  return (
    <>
      <ul className="flex justify-between px-10 py-5 items-center border">
        <li className="text-2xl font-semibold text-indigo-600">ShopEase</li>
        <div className="flex gap-10">
        <li className="cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <span >
              <Link to={"/cart"}>Cart</Link>
            </span>
            <span className="relative top-[-0.5rem] text-red-500 select-none">
              {cartsval.length}
            </span>
          </li>
          <li className="cursor-pointer">
            <Link to={"about"}>AboutUs</Link>
          </li>
        </div>
      </ul>{" "}
      {/* <div className="absolute right-10">
        <Cart />
      </div> */}
    </>
  );
};

export default Navbar;

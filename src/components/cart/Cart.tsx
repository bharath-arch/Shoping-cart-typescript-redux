import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { pushToCart, removefromcart } from "../../Redux/sclice/cart";
import { CartItem } from "../../types/CartItemsType";

interface CartProps {
  active: boolean;
}
const Cart: React.FC<CartProps> = ({ active }) => {
  const dispatch = useDispatch();
  const cartsval = useSelector((state: RootState) => state.cart.cart);
  const handleAddCart = (id: number, name: string) => {
    const cartItem: CartItem = { id, name, quantity: 1 };

    dispatch(pushToCart(cartItem));
  };

  // Handle removing items from the cart
  const handleRemoveCart = (id: number, name: string) => {
    const cartItem: CartItem = { id, name, quantity: 1 };
    dispatch(removefromcart(cartItem));
  };
  return (
    <>
      {active && (
        <>
          {" "}
          <span className="flex justify-end w-[20px] min-h-[20px]  bg-slate-100  relative right-[-22rem] top-[-1.5rem] transform rotate-45 "></span>
          <div className="relative right-[-2rem] top-[-2.2rem] h-96 w-96  z-10 bg-slate-100 overflow-hidden p-2">
            <div className="overflow-y-scroll h-full scroll-smooth scroll-m-1">
              <p className="text-3xl font-semibold text-center p-3 ">Cart</p>
              {/* {cartsval.map((item, index) => (
            <div key={index}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
            </div>

          ))} */}
              {cartsval?.map((item, index) => (
                <div key={index} className=" p-3 border ">
                  <img src={item.image} alt="" className="h-36 w-36 m-auto"/>
                  <ul className="text-center">
                    <li className="mt-10">{item.name}</li>
                    <li className="text-green-600">{item.quantity}</li>
                    {/* <li className="text-2xl font-semibold">{item.price} &#8377; </li> */}
                  </ul>
                  <div className=" flex flex-col items-center  gap-2 ">
                    <button className=" p-1 flex gap-3 items-center">
                      <span
                        className="border border-black p-1"
                        onClick={() => handleAddCart(item.id, item.name)}
                      >
                        {" "}
                        &#43;
                      </span>
                      Add to Cart{" "}
                      <span
                        className="border border-black p-1"
                        onClick={() => handleRemoveCart(item.id, item.name)}
                      >
                        &minus;
                      </span>
                    </button>
                    <button className="border border-black p-1 px-16 ">
                      buY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

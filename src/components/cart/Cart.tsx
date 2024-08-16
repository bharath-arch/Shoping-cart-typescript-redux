import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import Button from "../ButtonGroup/CartBtn/Button";

// interface CartProps {
//   active: boolean;
// }
const Cart: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);

  return (
    <>
      <>
        {" "}
        {/* <span className="flex justify-end w-[20px] min-h-[20px]  bg-slate-100  relative right-[-22rem] top-[-1.5rem] transform rotate-45 "></span> */}
        {/* <div className="relative right-[-2rem] top-[-2.2rem] h-96 w-96  z-10 bg-slate-100 overflow-hidden p-2"> */}
        {/* <div className="overflow-y-scroll h-full scroll-smooth scroll-m-1"> */}
        <p className=" ml-5md:ml-10 text-3xl font-semibold p-3 select-none">
          Cart
        </p>
        <div className="flex gap-5">
          <div className="flex-auto md:flex-[4]">
            {cartsval?.length === 0 && (
              <>
                <div className="flex justify-between items-center p-3 border ml-10 w-auto ">
                  No Item Found
                </div>
              </>
            )}
            {cartsval?.map((item) => (
              <>
                <div
                  key={item.id}
                  className="md:flex justify-between items-center p-3 border md:ml-10 ml-5 "
                >
                  <div className="md:flex gap-3">
                    <img src={item.image} alt="" className="h-36 w-36 " />
                    <ul className="text-center ">
                      <li className="mt-10">{item.name}</li>
                      <li>
                        Item Quantity:{" "}
                        <span className="text-green-600">{item.quantity}</span>
                      </li>
                      {/* <li className="text-2xl font-semibold">{item.price} &#8377; </li> */}
                    </ul>
                  </div>
                  <div className=" flex flex-col items-center  gap-2 ">
                    <Button image={item.image} id={item.id} title={item.name} />
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex-1 flex  flex-wrap">
            <div className="flex flex-col gap-10 text-center  p-6 h-60 border md:mr-10 mr-5  ">
              <p className="flex flex-col">
                Subtotal (4 items): <span>&#8377; 5,196.00</span>
              </p>
              <button className="border border-black p-1 rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
    </>
  );
};

export default Cart;

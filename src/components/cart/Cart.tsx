import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import Button from "../ButtonGroup/Button";

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
        <p className="text-3xl font-semibold text-center p-3 select-none">
          Cart
        </p>
        <div className="flex flex-col gap-3 justify-center">
          {cartsval?.map((item) => (
            <div key={item.id} className=" p-3 border  ">
              <img src={item.image} alt="" className="h-36 w-36 m-auto" />
              <ul className="text-center ">
                <li className="mt-10">{item.name}</li>
                <li className="text-green-600">{item.quantity}</li>
                {/* <li className="text-2xl font-semibold">{item.price} &#8377; </li> */}
              </ul>
              <div className=" flex flex-col items-center  gap-2 ">
                <Button image={item.image} id={item.id} title={item.name} />
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
    </>
  );
};

export default Cart;

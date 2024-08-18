import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import Button from "../ButtonGroup/CartBtn/Button";

const Cart: React.FC = () => {
  const cartsval = useSelector((state: RootState) => state.cart.cart);

  // Calculate total quantity and total price
  const totals = cartsval?.reduce(
    (acc, item) => {
      acc.totalQuantity += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 }
  ) || { totalQuantity: 0, totalPrice: 0 };

  const { totalQuantity, totalPrice } = totals;

  return (
    <>
      <p className="ml-5 md:ml-10 text-3xl font-semibold p-3 select-none">
        Cart
      </p>
      <div className="flex gap-5">
        <div className="flex-auto md:flex-[4]">
          {cartsval?.length === 0 && (
            <div className="flex justify-between items-center p-3 border ml-10 w-auto">
              No Item Found
            </div>
          )}
          {cartsval?.map((item) => (
            <div
              key={item.id}
              className="md:flex justify-between items-center p-3 border md:ml-10 ml-5"
            >
              <div className="md:flex gap-3">
                <img src={item.image} alt="" className="h-36 w-36" />
                <ul className="text-center">
                  <li className="mt-10">{item.name}</li>
                  <li>
                    Item Quantity:{" "}
                    <span className="text-green-600">{item.quantity}</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button
                  image={item.image}
                  id={item.id}
                  title={item.name}
                  price={item.price}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-wrap">
          <div className="flex flex-col gap-10 text-center p-6 min-h-60 border md:mr-10 mr-5">
            <p className="flex flex-col">
              {cartsval?.length > 0 ? (
                <span className="text-green-600">
                  Total Items ({totalQuantity} items):{" "}
                  <span>&#8377; {totalPrice.toFixed(2)}</span>
                </span>
              ) : (
                <span>Subtotal 0 items</span>
              )}
            </p>
            <button className="border border-black p-1 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

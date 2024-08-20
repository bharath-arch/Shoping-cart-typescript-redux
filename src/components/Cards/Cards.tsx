import React, { useEffect, useState } from "react";
import Button from "../ButtonGroup/CartBtn/Button";
import { useGetDataQuery } from "../../Redux/rtk-querry/rtkSllice";
import withPremiumComponent from "../../Hoc/withPremiumComponent";
// import { CartItemsType } from "../../types/CartItemsType";
// import { useQuery } from "react-query";
// import { getProducts } from "../../Api/ShopingCartFetch";

interface Props {
  price: number[] | undefined;
}
const Cards: React.FC<Props> = ({ price }) => {
  // const { data} = useQuery<CartItemsType[]>(
  //   ["products"],
  //   getProducts
  // );

  const [dimenson, setDimension] = useState({
    height: "",
    width: "",
  });

  console.log(dimenson);

  const { data } = useGetDataQuery();

  useEffect(() => {
    // console.log(window.innerHeight, window.innerWidth);
    const handleResize = () => {
      setDimension({
        height: `${window.innerHeight}`,
        width: `${window.innerWidth}`,
      });
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimenson]);

  return (
    <>
    {/* {parseInt(dimenson.width) <= 400 && <p className="text-red-600">Small Screen</p>} */}
      <div className="flex flex-wrap gap-3 justify-center p-5 ">
        {/* {dimenson.height } x {dimenson.width} */}
        {data?.map((item) => (
          <div
            key={item.id}
            className="w-60 min-h-96 flex  flex-col place-items-center p-3 border relative"
          >
            <img src={item.image} className="w-20 h-20" />
            <ul className="text-center relative">
              <li className="mt-10">{item.title}</li>
              {/* <li>{item.description}</li> */}
              <li className="text-2xl font-semibold">{item.price} &#8377; </li>

              {price?.includes(item.price) && (
                <li className="text-green-600 absolute top-0  flex justify-center">
                  Premium
                </li>
              )}
            </ul>
            <div className=" flex flex-col  gap-2 mt-10 absolute bottom-4">
              <Button
                image={item.image}
                id={item.id}
                title={item.title}
                price={item.price}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const Premium = withPremiumComponent(Cards);

export default Premium;

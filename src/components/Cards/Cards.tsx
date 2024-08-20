import React from "react";
import Button from "../ButtonGroup/CartBtn/Button";
import { useGetDataQuery } from "../../Redux/rtk-querry/rtkSllice";
import withPremiumComponent from "../../Hoc/withPremiumComponent";
// import { CartItemsType } from "../../types/CartItemsType";
// import { useQuery } from "react-query";
// import { getProducts } from "../../Api/ShopingCartFetch";

interface card{
  id:string;
  price:number;
  name:string;
  image:string;
}
interface Props {
  price: number[] | undefined;
}
const Cards: React.FC<Props> = ({ price }) => {
  // const { data} = useQuery<CartItemsType[]>(
  //   ["products"],
  //   getProducts
  // );

  console.log(price)

  const { data } = useGetDataQuery();

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center p-5 ">
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

import React from "react";
import Button from "../ButtonGroup/Button";
import { CartItemsType } from "../../types/CartItemsType";
import { useQuery } from "react-query";
import { getProducts } from "../../Api/ShopingCartFetch";


const Cards: React.FC = () => {

  const { data} = useQuery<CartItemsType[]>(
    ["products"],
    getProducts
  );
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center p-5 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="w-60 min-h-96 flex  flex-col place-items-center p-3 border relative"
          >
            <img src={item.image} className="w-20 h-20" />
            <ul className="text-center">
              <li className="mt-10">{item.title}</li>
              {/* <li>{item.description}</li> */}
              <li className="text-2xl font-semibold">{item.price} &#8377; </li>
            </ul>
            <div className=" flex flex-col  gap-2 mt-10 absolute bottom-4">
              <Button image={item.image} id={item.id} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;

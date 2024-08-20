import React from "react";
import Button from "../ButtonGroup/CartBtn/Button";
import withPremiumComponent from "../../Hoc/withPremiumComponent";
import { CardProps } from "../../types/CartItemsType";


const Cards: React.FC<CardProps> = ({ ...props }) => {
  console.log(props, "props");
  return (
    <>
      <div
        key={props.id}
        className="w-60 min-h-96 flex flex-col place-items-center p-3 border relative"
      >
        <img src={props.image} className="w-20 h-20" alt={props.title} />
        <ul className="text-center">
          <li className="mt-10">{props.title}</li>
          <li className="text-2xl font-semibold">{props.price} &#8377;</li>
        </ul>
        <div className="flex flex-col gap-2 mt-10 absolute bottom-4">
          <Button
            image={props.image}
            id={props.id}
            title={props.title}
            price={props.price}
          />
        </div>
      </div>
    </>
  );
};

const PremiumComponenst = withPremiumComponent(Cards);

export default PremiumComponenst;

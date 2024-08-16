import { useHandleAddCart, useHandleRemoveCart } from "../../../utils/handlecart";

interface Props {
  item?: string;
  id: number;
  title: string;
  image: string | undefined;
}
const Button: React.FC<Props> = ({ id, title, image }) => {
  const handleAdd = useHandleAddCart(id, title, image);
  const handleRemoveCart = useHandleRemoveCart(id, title, image);
  return (
    <>
    
      <button className=" p-1 flex gap-3 items-center">
        <span className="border border-black p-1" onClick={() => handleAdd()}>
          {" "}
          &#43;
        </span>
        Add to Cart{" "}
        <span
          className="border border-black p-1"
          onClick={() => handleRemoveCart()}
        >
          &minus;
        </span>
      </button>
      <button className="border border-black p-1 px-16 ">buY</button>
    </>
  );
};

export default Button;

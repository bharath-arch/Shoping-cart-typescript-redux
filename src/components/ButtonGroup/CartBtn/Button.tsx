import { useNavigate } from "react-router";
import {
  useHandleAddCart,
  useHandleRemoveCart,
} from "../../../utils/handlecart";

interface Props {
  item?: string;
  id: number;
  title: string;
  image: string | undefined;
  price: number | undefined;
}
const Button: React.FC<Props> = ({ id, title, image , price }) => {
  const handleAdd = useHandleAddCart(id, title, image , price);
  const handleRemoveCart = useHandleRemoveCart(id, title, image );

  const navigate = useNavigate();
  const handlebuy = () => {
    const email = localStorage.getItem("userEmail");

    console.log(email);
    if(email){
      window.alert("buY")
    }
    else{
      navigate("/login")
    }
  };
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
      <button
        className="border border-black p-1 px-16 "
        onClick={() => handlebuy()}
      >
        buY
      </button>
    </>
  );
};

export default Button;

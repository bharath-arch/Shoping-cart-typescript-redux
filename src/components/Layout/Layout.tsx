import { useQuery } from "react-query";
import { getProducts } from "../../Api/ShopingCartFetch";
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/Navbar";
import { CartItemsType } from "../../types/CartItemsType";
import AnimatePing from "../../LoadingAnimation/Animateping";

export const Layout: React.FC = () => {
    const { data, error, isLoading } = useQuery<CartItemsType[]>(
        ["products"],
        getProducts
      );
    
      // Handle adding items to the cart
    
      if (isLoading) {
        return <AnimatePing />;
      }
    
      if (error) {
        return <div>An error occurred: {(error as Error).message}</div>;
      }
  return (
    <>
      <Navbar />
      <Cards products={data} />
    </>
  );
};

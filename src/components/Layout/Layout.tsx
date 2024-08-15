import { useQuery } from "react-query";
import { getProducts } from "../../Api/ShopingCartFetch";
import Navbar from "../../components/Navbar/Navbar";
import { CartItemsType } from "../../types/CartItemsType";
import AnimatePing from "../../LoadingAnimation/Animateping";
import { Outlet } from "react-router";

export const Layout: React.FC = () => {
    const {  error, isLoading } = useQuery<CartItemsType[]>(
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
     
      <Outlet/>
    </>
  );
};

import { ComponentType } from "react";
import { useGetDataQuery } from "../Redux/rtk-querry/rtkSllice";

const withPremiumComponent = (
  WraperComponent: ComponentType<{ price: number[] | undefined }>
) => {
  //   const data = 0;
  return function () {
    const { data } = useGetDataQuery();
    if (data !== undefined && data?.length === 0) {
      return <div>No Item Found</div>;
    } else {
      const filteredData = data
        ?.map((item) => item.price)
        .filter((price) => price > 200);
      return <WraperComponent price={filteredData} />;
    }
  };
};

export default withPremiumComponent;

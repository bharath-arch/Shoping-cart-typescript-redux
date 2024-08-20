import { useGetDataQuery } from "../../Redux/rtk-querry/rtkSllice";
import Cards from "./Cards";

function CartsPage() {
  const { data } = useGetDataQuery();
  // console.log(data)

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center p-5">
        {data?.map((item) => (
          <>
            <Cards key={item.id} {...item} />
          </>
        ))}
      </div>
    </>
  );
}

export default CartsPage;

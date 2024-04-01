import Card from "./Card";
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  console.log(data);
  return (
    <div className="mx-20 my-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl capitalize">{type} products</h1>
        <p className="flex-grow-2 text-gray-500 w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

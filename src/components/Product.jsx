import Card from "./Card";

const Product = ({ item }) => {
  return (
    <div className="m-4 ">
      <Card item={item} />
    </div>
  );
};

export default Product;

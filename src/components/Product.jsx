import ProductCard from "./ProductCard";
const Product = ({ product }) => {
  return (
    <div className="m-4 ">
      <ProductCard product={product} />
    </div>
  );
};

export default Product;

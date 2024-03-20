import Product from "../components/Product";

const products = [
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 200 },
  { name: "Product 3", price: 300 },
];

const Products = () => {
  return (
    <div>
      {products.map((product, i) => (
        <div key={i}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;

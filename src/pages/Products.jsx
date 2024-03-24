import Product from "../components/Product";
import productimg from "../assets/home.jpg";

const products = [
  {
    name: "Sweet & Sour",
    price: 100,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 2",
    price: 200,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
  {
    name: "Product 3",
    price: 300,
    img: productimg,
    desc: "Very yummy taste it while it lasts",
  },
];

const Products = () => {
  return (
    <div className=" px-10  py-20 flex flex-col md:flex-row  flex-wrap gap-4 justify-center     ">
      {products.map((product, i) => (
        <div key={i} className="w-1/4">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}; 

export default Products;

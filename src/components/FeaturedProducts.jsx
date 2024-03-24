import React from "react";
import Card from "./Card";

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Nike Air Max",
    isNew: true,
    oldPrice: "$149.99",
    price: "$89.99",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Adidas Superstar",
    isNew: false,
    oldPrice: "$99.99",
    price: "$79.99",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Converse Chuck Taylor All Star",
    isNew: true,
    oldPrice: "$59.99",
    price: "$49.99",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Puma Suede Classic",
    isNew: false,
    oldPrice: "$79.99",
    price: "$69.99",
  },
];

const FeaturedProducts = ({ type }) => {
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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

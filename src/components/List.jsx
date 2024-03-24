import React from "react";
import Card from "./Card";

const List = () => {
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

  return (
    <div className="flex flex-wrap justify-between">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;

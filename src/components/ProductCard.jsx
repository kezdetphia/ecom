import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="min-h-96 bg-neutral-100 max-w-72 flex flex-col items-center justify-between border-2 border-pink-400  rounded-xl font-tru text-xl text-neutral-800 ">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={product.img}
          className="w-full p-3 h-[270px]"
          alt="product1"
        />
        <h2>{product.name}</h2>
        <p>{product.desc}</p>
        <p>{product.price}$</p>
      </div>
      <div>
        <button className=" bg-pink-200 px-6 py-1 rounded-xl text-2xl font-tru my-5 hover:bg-pink-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

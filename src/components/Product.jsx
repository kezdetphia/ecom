import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div>
        <div className="flex space-x-2">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

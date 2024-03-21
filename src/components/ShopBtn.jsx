import React from "react";
import { Link } from "react-router-dom";

const ShopBtn = () => {
  return (
    <div className="flex justify-around   ">
      <Link to={"/products"}>
        <p className="flex items-center border rounded-xl border-neutral-800 font-tru font-semibold bg-neutral-200 text-pink-400 text-3xl px-4 pt-3 ">
          SHOP
        </p>
      </Link>
    </div>
  );
};

export default ShopBtn;

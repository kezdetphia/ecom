import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Cart from "../components/Cart";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },

  { name: "Stores", path: "/products" },
];

const categoryLinks = [
  { name: "Women", path: "/products/women" },
  { name: "Men", path: "/products/men" },
  { name: "Kids", path: "/products/kids" },
];

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className=" h-[100px] bg-yellow-400 flex justify-around items-center  ">
      <div className="flex space-x-2 ">
        {categoryLinks.map((category, i) => (
          <div key={i}>
            <ul>
              <Link to={category.path}>
                <p className="text-xl">{category.name}</p>
              </Link>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl"> LOGO</p>
      </div>
      <div className="flex items-center space-x-10 ">
        <ul className="flex space-x-3 text-xl font-tru text-neutral-600    ">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3  ">
          <IoIosSearch className="text-2xl" />
          <MdOutlinePersonOutline className="text-2xl" />
          <IoIosHeartEmpty className="text-2xl" />

          <div
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex relative cursor-pointer "
          >
            <LuShoppingCart className="text-2xl " />
            <span className="absolute left-4 bottom-1 text-red-500 bg-blue-600 px-1 rounded-full ">
              0
            </span>
          </div>
        </div>
        {isCartOpen && (
          <div className="absolute top-24   right-0 bg-white shadow-lg p-5">
            <Cart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

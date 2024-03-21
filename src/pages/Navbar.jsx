import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },

  { name: "Products", path: "/products" },
];

const Navbar = () => {
  return (
    <div className=" h-[100px] bg-pink-300 flex justify-between items-center px-20 ">
      <div>
        <Link to="/">
          <p className="text-2xl">LOGO</p>
        </Link>
      </div>
      <div className=" ">
        <ul className="flex space-x-3 text-3xl font-tru text-neutral-600    ">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

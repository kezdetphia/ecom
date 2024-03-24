import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer mx-20 my-20 ">
      <div className="top flex gap-x-10">
        <div className="item flex flex-col">
          <h1 className="text-lg font-semibold">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item flex flex-col">
          <h1 className="text-lg font-semibold">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item flex flex-col">
          <h1 className="text-lg font-semibold">About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item flex flex-col">
          <h1 className="text-lg font-semibold">Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom flex justify-between items-center mt-10">
        <div className="left flex items-center">
          <span className="logo text-blue-500 font-bold text-2xl">
            EcomStore
          </span>
          <span className="copyright ml-4 text-gray-500 text-sm">
            © Copyright {year}. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="Payment methods" className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

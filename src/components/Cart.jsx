const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Nike Air Max",
    isNew: true,
    oldPrice: "$149.99",
    price: "$89.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Adidas Superstar",
    isNew: false,
    oldPrice: "$99.99",
    price: "$79.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71sek3cbamL._AC_SX625_.jpg",
    img2: "https://m.media-amazon.com/images/I/71ovsF1JieL._AC_SX625_.jpg",
    title: "Adidas Superstar",
    isNew: false,
    oldPrice: "$99.99",
    price: "$79.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
  },
];

const Cart = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl text-neutral-600 mb-10">
          Products in your cart
        </h1>
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex space-x-7">
              <img src={item.img} alt={item.title} className="h-32 " />
              <div className="">
                <h1 className="text-xl text-neutral-700 mb-2">{item.title}</h1>
                <div className="flex space-x-5 items-start">
                  <div className="flex flex-col space-y-8 text-neutral-700  ">
                    <p className="max-w-xs break-words">
                      {item.desc.substring(0, 100)}...
                    </p>
                    <p>1x ${item.price}</p>
                  </div>
                  <div className="border border-neutral-800 h-7  ">
                    <p className="px-2 ">X</p>
                  </div>
                </div>
                <div className="h-0.5 bg-neutral-300 my-3 "></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <span className="text-neutral-700 font-semibold">SUBTOTAL:</span>
        <span>${"954554"}</span>
      </div>
      <div className="h-0.5 bg-neutral-300 "></div>
      <div className="mt-5">
        <button className="flex items-center justify-center bg-blue-600 px-7 py-2 gap-x-2 hover:bg-blue-700 text-neutral-300">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;

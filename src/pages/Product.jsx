import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const [increaseButtonClick, setIncreaseButtonClicked] = useState(false);
  const [decreaseButtonClick, setDecreaseButtonClicked] = useState(false);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1);
    setDecreaseButtonClicked(true);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    setIncreaseButtonClicked(true);
  };

  setTimeout(() => {
    setIncreaseButtonClicked(false);
    setDecreaseButtonClicked(false);
  }, 100);

  console.log("Image 1 URL:", data?.attributes?.img?.data?.attributes?.url);
  console.log("Image 2 URL:", data?.attributes?.img2?.data?.attributes?.url);

  return (
    <div className="product h-screen pt-24 px-5 px-50 flex gap-10">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="left flex-row sm:flex w-full md:w-1/2 gap-x-6">
            <div className="images flex flex-col gap-4">
              <img
                onClick={() => setSelectedImg("img")}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt="img1"
                className="cursor-pointer w-full h-24 object-cover"
              />

              <img
                onClick={() => setSelectedImg("img2")}
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt="img2"
                className="cursor-pointer w-full h-24 object-cover"
              />
            </div>
            <div className="mainImg flex-1">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImage]?.data?.attributes?.url
                }
                className="object-cover w-full h-[600px] max-h-[800px]"
                alt="product images"
              />
            </div>
          </div>
        </>
      )}
      <div className="right w-1/2 ">
        <h1 className="text-3xl mb-3">{data?.attributes?.title}</h1>
        <span className="text-2xl">{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="space-x-3 mt-5">
          <button
            className={`border border-black w-5 ${
              decreaseButtonClick && "bg-blue-600"
            } `}
            disabled={quantity === 0}
            onClick={handleDecrease}
          >
            -
          </button>
          <span>{quantity}</span>

          <button
            className={`border border-black  w-5 ${
              increaseButtonClick && "bg-blue-600"
            } `}
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <div className="mt-5 ">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  price: data.attributes.price,
                  desc: data.attributes.desc,
                  img:
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url,
                  quantity,
                })
              )
            }
            className="flex items-center justify-center bg-blue-600 px-7 py-2 gap-x-2 hover:bg-blue-700 text-neutral-300"
          >
            <FaCartArrowDown /> ADD TO CART
          </button>
        </div>
        <div className="mt-20 text-neutral-600">
          <div className="flex gap-x-1">
            <h3>Vendor:</h3>
            <span>Polo</span>
          </div>
          <div className="flex gap-x-1">
            <h3>Product Type:</h3>
            <span>Shoes</span>
          </div>
          <div className="flex gap-x-1">
            <h3>Tag:</h3>
            <span>Shoes, Men</span>
          </div>
          <div className="h-0.5 bg-neutral-300 mt-7"></div>

          <div className="flex flex-col pt-8 w-1/4 text-neutral-500">
            <Link>DESCRIPTION</Link>
            <div className="h-0.5 bg-neutral-300 my-2 "></div>
            <Link>ADDITIONAL INFORMATION</Link>
            <div className="h-0.5 bg-neutral-300 my-2"></div>
            <Link>FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

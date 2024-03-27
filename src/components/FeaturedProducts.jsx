import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);
  console.log(type);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(data[0]?.attributes.img.data.attributes.url);

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

import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";

const List = ({ catId, maxPrice, sort, subCats }) => {
  const queryParams = `/products?populate=*&[filters][categories][id]=${encodeURIComponent(
    catId
  )}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${encodeURIComponent(item)}`
  )}&[filters][price][$lte]=${encodeURIComponent(
    maxPrice
  )}&sort=price:${encodeURIComponent(sort)}`;

  const { data, loading, error } = useFetch(queryParams);
  return (
    <div className="flex flex-wrap justify-between">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;

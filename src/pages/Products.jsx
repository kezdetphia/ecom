import { useParams } from "react-router-dom";
import List from "../components/List";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams()?.id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );

  console.log("this is productrs data", data);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats);

  return (
    <div className="px-12 flex justify-between mt-12   ">
      <div className="left w-1/4 flex flex-col gap-y-4 pr-48 sticky top-8 h-full ">
        <div className="">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div>
          <h2>Filter by price</h2>
          <div>
            <span>0</span>
            <input
              onChange={(e) => setMaxPrice(e.target.value)}
              type="range"
              min="0"
              max="1000"
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div>
          <h2>Sort by</h2>
          <div className="">
            <div className="flex gap-x-1">
              <input
                onChange={() => setSort("asc")}
                type="radio"
                id="asc"
                value="asc"
                name="price"
              />
              <label htmlFor="asc">Price: Low to High</label>
            </div>
            <div className="flex gap-x-1">
              <input
                onChange={() => setSort("desc")}
                type="radio"
                id="desc"
                value="desc"
                name="price"
              />
              <label htmlFor="1">Price: High to Low</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-full  ">
        <img
          className="h-56 w-full object-cover mb-20 "
          alt="fashionimg"
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;

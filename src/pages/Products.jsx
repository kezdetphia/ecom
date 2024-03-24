import { useParams } from "react-router-dom";
import List from "../components/List";
import Product from "../components/Product";
import { useState } from "react";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState();

  return (
    <div className="px-12 flex justify-between mt-12   ">
      <div className="left flex flex-col gap-y-4 pr-48 sticky top-8 h-full ">
        <div className="">
          <h2>Product Categories</h2>
          <div className="flex gap-x-1">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1">Jackets</label>
          </div>
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
        <List  catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;

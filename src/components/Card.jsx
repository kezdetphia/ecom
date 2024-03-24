import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-60 flex flex-col gap-10 mb-50 relative pb-20">
        <div className="image w-full h-58 overflow-hidden">
          {item.isNew && (
            <span className="absolute top-5 left-5 bg-white text-teal-500 px-2 py-1 z-3 font-semibold text-xs">
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt="img1"
            className="object-cover w-full h-full"
          />
          <img
            src={item.img2}
            alt="img2"
            className="object-cover absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <h2 className="text-base font-normal">{item.title}</h2>
        <div className="prices flex gap-20">
          <h3 className="text-lg font-semibold">
            {item.oldPrice || item.price + 20}
          </h3>
          <h3 className="text-lg font-semibold">{item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;

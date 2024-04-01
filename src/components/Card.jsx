import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card w-60 flex flex-col gap-10 mb-50 relative pb-20">
        <div className="image w-full h-58 overflow-hidden">
          {item?.attributes?.isNew && (
            <span className="absolute top-5 left-5 bg-white text-teal-500 px-2 py-1 z-3 font-semibold text-xs">
              New Season
            </span>
          )}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img.data.attributes.url
            }
            alt="img1"
            className="object-cover w-full h-full"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2.data.attributes.url
            }
            alt="img2"
            className="object-cover absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <h2 className="text-base font-normal">{item?.attributes?.title}</h2>
        <div className="prices flex gap-20">
          <h3 className="text-lg font-semibold relative">
            {/* Original price */}
            {item?.attributes?.oldPrice || item?.attributes?.price + 20}
            {/* Horizontal line */}
            <span className=" absolute inset-x-0 top-1/2 bg-neutral-700 h-0.5 transform -translate-y-1/2 z-0"></span>
          </h3>
          <h3 className="text-lg font-semibold">{item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;

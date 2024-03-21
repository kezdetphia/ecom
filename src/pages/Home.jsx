import bg from "../assets/home.jpg";
import ShopBtn from "../components/ShopBtn";

const Home = () => {
  return (
    <div
      className="px-20 flex justify-center min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" pt-60 ">
        <p className="text-5xl text-pink-600 font-tru">
          Step into a World of Sweet Bliss.
        </p>
        <p className="text-4xl text-pink-500 font-tru pb-5">
          Where Every Treat Tells a Tale.
        </p>
        <ShopBtn />
      </div>
    </div>
  );
};

export default Home;

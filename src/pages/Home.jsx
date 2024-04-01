import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import List from "../components/List";

const Home = () => {
  return (
    <div className="  ">
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  );
};

export default Home;

// import { LuArrowLeftCircle } from "react-icons/lu";
// import { LuArrowRightCircle } from "react-icons/lu";

const Slider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  // };

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <div
      className="min-h-screen bg"
      style={{
        // backgroundImage: `url(${images[currentSlide]})`,
        backgroundImage: `url(${images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
    // <div className="flex absolute h-screen  ">
    //   <div onClick={nextSlide} className=" relative left-0 top-96  text-3xl">
    //     <LuArrowLeftCircle />
    //   </div>
    //   <div
    //     className="flex overflow-hidden w-screen h-screen"
    //     style={{ transform: `translateX(-${currentSlide * 50}vw)` }}
    //   >
    //     <img src={images[0]} alt="image" className="w-screen" />
    //     <img src={images[1]} alt="image" className="w-full" />
    //     <img src={images[2]} alt="image" className="w-full" />
    //     {/* {images.map((image, i) => (
    //       <img
    //         key={i}
    //         src={image}
    //         alt="image"
    //         className="w-screen
    //     "
    //       />
    //     ))} */}

    //     <div onClick={prevSlide} className=" relative right-0 top-96  text-3xl">
    //       <LuArrowRightCircle />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Slider;

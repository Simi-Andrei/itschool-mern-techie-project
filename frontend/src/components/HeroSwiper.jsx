import Carousel from "react-multi-carousel";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";

const BestSellersCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 1,
    },
    largeDesktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        className="absolute left-1 bg-black/20 rounded-full p-1 focus:outline-black"
        onClick={onClick}
      >
        <BsChevronCompactLeft className="text-3xl" fill="#fff" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-1 bg-black/20 rounded-full p-1 focus:outline-black"
        onClick={onClick}
      >
        <BsChevronCompactRight className="text-3xl" fill="#fff" />
      </button>
    );
  };

  return (
    <div className="mt-8">
      <Carousel
        draggable={false}
        infinite={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        dotListClass="react-multi-carousel-dot-list"
        showDots={true}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        className="h-[270px] md:h-[400px] lg:h-[500px]"
      >
        <div>
          <img src="/images/heroSwiper/heroSwiper1.jpg" alt="slider" />
        </div>
        <div>
          <img src="/images/heroSwiper/heroSwiper2.jpg" alt="slider" />
        </div>
        <div>
          <img src="/images/heroSwiper/heroSwiper3.jpg" alt="slider" />
        </div>
      </Carousel>
    </div>
  );
};
export default BestSellersCarousel;

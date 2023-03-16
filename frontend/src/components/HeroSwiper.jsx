import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const HeroSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "/images/heroSwiper/heroSwiper1.jpg" },
    { url: "/images/heroSwiper/heroSwiper2.jpg" },
    { url: "/images/heroSwiper/heroSwiper3.jpg" },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[300px] md:h-[500px] relative">
      <div
        className="w-full h-full transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-[50%] left-1 -translate-y-[50%] cursor-pointer rounded-full p-1 "
      >
        <BsChevronCompactLeft fill="#fff" size={30} />
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-[50%] right-1 -translate-y-[50%] cursor-pointer rounded-full p-1 "
      >
        <BsChevronCompactRight fill="#fff" size={30} />
      </button>
      <div className="flex justify-center py-1">
        {slides.map((slide, slideIndex) => (
          <button key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <GoPrimitiveDot
              fill={slideIndex === currentIndex ? "#d4be8a" : "#e7e5e4"}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
export default HeroSwiper;

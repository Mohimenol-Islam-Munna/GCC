import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SharedSlider = ({ customSliderProps, children }) => {
  const { title, description, targetRef, settings } = customSliderProps;

  // custom next handler
  const nextSlideHandler = () => {
    targetRef.current.slickNext();
  };

  // custom previous handler
  const prevSlideHandler = () => {
    targetRef.current.slickPrev();
  };

  return (
    <div className=" bg-gray-100">
      <h3 className="text-3xl">{title}</h3>
      <div className="mt-3 mb-6 flex">
        <p className="grow text-sm">{description}</p>

        <div className="basis-32 self-end flex justify-end gap-2">
          <IoIosArrowBack
            className="border border-gray-400 text-2xl"
            onClick={() => nextSlideHandler()}
          />

          <IoIosArrowForward
            className="border border-gray-400 text-2xl"
            onClick={() => prevSlideHandler()}
          />
        </div>
      </div>

      {/* slick slider  */}
      <div className="relative box-border">
        <Slider ref={targetRef} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SharedSlider;

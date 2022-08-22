import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Events() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="border border-indigo-400 my-20 py-10 bg-gray-100">
      <h3>Events</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam iusto provident unde dolorem, mollitia a culpa totam deserunt
      </p>

      <div
        className="border border-yellow-500 inline-block p-3"
        // onClick={this.slider.slickNext()}
      >
        <IoIosArrowForward />
      </div>

      {/* slick slider  */}
      <div className="border-2 border-indigo-500">
        <Slider {...settings}>
          <div className="bg-indigo-300">
            <h3>1</h3>
          </div>
          <div className="bg-green-200">
            <h3>2</h3>
          </div>
          <div className="bg-red-200">
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
      <div>
        <button className="border border-blue-400 px-2 py-1 rounded">
          view all events
        </button>
      </div>
    </div>
  );
}

export default Events;

import React, { useRef } from "react";
import { BsBookmark } from "react-icons/bs";


import SharedSlider from "./Shared/SharedSlider";

const BookAndDownloads = () => {
  const bookAndDownloadSlider = useRef(null);

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const customSliderProps = {
    title: "Book & downloads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam iusto provident unde dolorem, mollitia a culpa totam deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam iusto provident unde dolorem, mollitia a culpa totam deserunt",
    targetRef: bookAndDownloadSlider,
    settings: settings,
  };

  const bookAndDownloadsSliderData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      type: "Freelancer",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      type: "Freelancer",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      type: "Freelancer",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      type: "Freelancer",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      type: "Freelancer",
    },
  ];

  return (
    <div className="w-[90%] mx-auto pt-10 pb-24">
      <SharedSlider customSliderProps={customSliderProps}>
        {bookAndDownloadsSliderData.map((data) => (
          <div key={data.id} className="relative">
            <div className="h-[250px]">
              <img
                src={`${data.image}`}
                alt="eventImage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 right-6">
              <button>
                <BsBookmark className="text-xl" />
              </button>
            </div>
            {/* content  */}
            <div className="mt-5">
              <p className="text-lg capitalize">{data.title}</p>
              <p className="mt-2 text-xs uppercase text-indigo-400">
                {data.type}
              </p>
              <p className="mt-3 text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </SharedSlider>
    </div>
  );
};

export default BookAndDownloads;

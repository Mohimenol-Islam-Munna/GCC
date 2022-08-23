import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import SharedSlider from "./Shared/SharedSlider";

function Events() {
  const eventsSlider = useRef(null);

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
    title: "Events",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam iusto provident unde dolorem, mollitia a culpa totam deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam iusto provident unde dolorem, mollitia a culpa totam deserunt",
    targetRef: eventsSlider,
    settings: settings,
  };

  const eventSliderData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      time: {
        date: "30",
        month: "oct",
      },
      location: "bangladesh",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      time: {
        date: "30",
        month: "oct",
      },
      location: "india",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      time: {
        date: "30",
        month: "oct",
      },
      location: "usa",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      time: {
        date: "30",
        month: "oct",
      },
      location: "nepal",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse perferendis porr magni! Nulla voluptatum distinctio hic laboriosam obcaecati!",
      image: "/images/demoImage.jpg",
      time: {
        date: "30",
        month: "oct",
      },
      location: "spain",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10">
      <SharedSlider customSliderProps={customSliderProps}>
        {eventSliderData.map((eventData) => (
          <div key={eventData.id} className="relative">
            <div className="h-[250px]">
              <img
                src={`${eventData.image}`}
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
            <div>
              <div className="flex items-center">
                <p className="grow p-2">{eventData.title}</p>
                <div className="px-4 py-1 bg-indigo-400">
                  <p>{eventData.time.date}</p>
                  <p>{eventData.time.month}</p>
                </div>
              </div>
              <p className="flex items-center px-2 gap-2">
                <GoLocation />{" "}
                <span className="capitalize">{eventData.location}</span>
              </p>
              <p className="mt-3 px-2">{eventData.description}</p>
              <div className="flex px-2 justify-between items-center my-5 ">
                <button className="text-indigo-500 uppercase">book now</button>
                <button className="uppercase">more info</button>
              </div>
            </div>
          </div>
        ))}
      </SharedSlider>

      <div className="my-16 text-center">
        <button className="border border-blue-400 px-5 py-1 rounded uppercase">
          view all events
        </button>
      </div>
    </div>
  );
}

export default Events;

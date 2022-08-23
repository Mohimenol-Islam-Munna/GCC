import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Subscription = () => {
  return (
    <div className="w-[90%] mx-auto py-20 flex flex-wrap sm:flex-nowrap">
      <div className="basis-full sm:basis-1/2 pr-2">
        <h4 className="uppercase text-lg">collaborative work management</h4>
        <h2 className="text-4xl">Stay connected</h2>
      </div>

      <div className="basis-full sm:basis-1/2">
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          iste officiis tempora id sequi ipsa unde perferendis. Itaque, sint
          fugit veritatis ducimus qui minus maiores vel, similique laboriosam
          rem pariatur.
        </p>

        <div className="flex mt-5 flex-wrap">
          <button className="pr-3 py-1 uppercase">subscribe now</button>
          <div className="grow flex">
            <input
              type="text"
              placeholder="Enter Email"
              className="grow p-2 border-b border-gray-700 bg-transparent outline-0 focus:border-indigo-400 placeholder:text-sm"
            />
            <button className="p-2">
              <BsArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

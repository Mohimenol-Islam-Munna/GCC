import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

// components
import Filter from "../components/Filter";

function Article() {
  return (
    <div className="px-5 sm:px-0 sm:w-[90%] mx-auto py-20">
      <Filter />
      <div className="my-10 flex ">
        {/* image  */}
        <div className="h-[300px] basis-7/12 pr-5">
          <img
            src="/images/demoImage.jpg"
            alt="article_image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* content  */}
        <div className="basis-5/12">
          <h6 className="text-xs">Friday, sept 3 2022</h6>
          <h2 className="mt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            sapiente.
          </h2>
          <h6 className="mt-5 text-xs">Lorem ipsum dolor sit amet.</h6>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            consequatur hic officia, dolor illo ipsa quos est reprehenderit
            cumque vel asperiores magni a distinctio deleniti sunt temporibus
            qui quaerat. Pariatur!
          </p>
          <button className="mt-5 text-indigo-400 uppercase text-xs">
            read more
          </button>
        </div>
      </div>
      <p className="flex justify-center items-center px-2 gap-2 cursor-pointer">
        <BsArrowRightCircle />
        <span className="capitalize text-sm">view all articles</span>
      </p>
    </div>
  );
}

export default Article;

import React, { useContext } from "react";
import { BsEnvelope, BsArrowRightCircle } from "react-icons/bs";

import { GlobalContext } from "../Layout/MainLayout";

const RightSideBar = () => {
  const { newsLetterStateHandler, subscriptionNewsLetterHandler } =
    useContext(GlobalContext);

  return (
    <div className="md:pl-8">
      <h2 className="mt-32 mb-8">About the author</h2>
      <img
        src="/images/demoImage.jpg"
        alt="author"
        className="w-[140px] h-[150px]"
      />
      <h4 className="mt-5">Md Mohimenol Islam Munna</h4>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde magnam
        dicta voluptatum sunt ad eveniet. Ipsum, exercitationem fuga nostrum, ab
        quo voluptates soluta perferendis quia provident vel veritatis
        perspiciatis excepturi.
      </p>

      <h4 className="mt-20">Popular posts</h4>

      <ul className="mt-5">
        <li>Lorem ipsum dolor sit, amet.</li>
        <li>Lorem ipsum dolor sit, amet.</li>
        <li>Lorem ipsum dolor sit, amet.</li>
        <li>Lorem ipsum dolor sit, amet.</li>
        <li>Lorem ipsum dolor sit, amet.</li>
      </ul>
      <div className="mt-8 bg-gray-200 p-8">
        <div className="w-[70px] h-[70px] rounded-full mx-auto bg-white flex justify-center items-center">
          <BsEnvelope className="text-3xl" />
        </div>
        <h2 className="text-center text-lg mt-4">Signup for newsletter</h2>
        <p className="text-xs mt-1 text-center">
          singup to ceceive latest posts and news
        </p>

        <div className="mt-5">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full border-b border-gray-700 bg-transparent outline-0 focus:border-indigo-400 placeholder:text-xs"
            onChange={(e) => newsLetterStateHandler(e)}
          />
          <p
            className="mt-5 flex justify-center items-center px-2 gap-2 cursor-pointer"
            onClick={subscriptionNewsLetterHandler}
          >
            <BsArrowRightCircle />
            <span className="capitalize text-sm">Subscribe Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

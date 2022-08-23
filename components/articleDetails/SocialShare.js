import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const SocialShare = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-0">
      <ul className="flex flex-col justify-center border divide-y">
        <li className="">
          <p className="capitalize -rotate-90 py-4">share</p>
        </li>
        <li className="py-2">
          <FaFacebookSquare className="mx-auto text-gray-600cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 ">
          <FaInstagram className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 ">
          <FaTwitter className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 ">
          <FaYoutube className="mx-auto text-gray-600  cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 ">
          <FaLinkedin className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;

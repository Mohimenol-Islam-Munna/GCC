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
    <div className="md:absolute md:top-[50%] md:-translate-y-[50%] md:left-0 text-center md:text-left">
      <ul className="inline-flex md:flex md:flex-col justify-center items-center md:items-stretch border md:divide-y divide-x md:divide-x-0">
        <li className="">
          <p className="capitalize md:-rotate-90 md:py-4 px-4 md:px-0">share</p>
        </li>
        <li className="py-2 px-2 md:px-0">
          <FaFacebookSquare className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 px-2 md:px-0">
          <FaInstagram className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 px-2 md:px-0">
          <FaTwitter className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 px-2 md:px-0">
          <FaYoutube className="mx-auto text-gray-600  cursor-pointer text-xl sm:text-3xl" />
        </li>
        <li className="py-2 px-2 md:px-0">
          <FaLinkedin className="mx-auto text-gray-600 cursor-pointer text-xl sm:text-3xl" />
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;

import React, { useContext } from "react";
import Link from "next/link";

import { GlobalContext } from "../Layout/MainLayout";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { newsLetterStateHandler, subscriptionNewsLetterHandler } =
    useContext(GlobalContext);

  return (
    <div className="bg-[#0F192D] py-16">
      <div className="px-5 sm:px-0 sm:w-[90%] mx-auto flex flex-wrap gap-[20px]">
        <div className="basis-full lg:basis-[calc(50%-10px)]">
          <h2 className="text-white text-6xl">E</h2>
          <p className="text-white text-xs sm:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="mt-8">
            <div className="flex flex-wrap gap-[10px]">
              {/* newsletter  */}
              <div className="basis-full sm:basis-[calc(65%-5px)]">
                <h2 className="text-xl sm:text-2xl text-white">
                  Get Our Newsletter
                </h2>
                <p className="mt-3 text-white text-xs sm:text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              {/* socil icons  */}
              <div className="basis-full sm:basis-[calc(35%-5px)] self-end flex gap-2">
                <FaFacebookSquare className="text-gray-600 cursor-pointer text-xl sm:text-3xl" />
                <FaInstagram className="text-gray-600 cursor-pointer text-xl sm:text-3xl" />
                <FaTwitter className="text-gray-600 cursor-pointer text-xl sm:text-3xl" />
                <FaYoutube className="text-gray-600 cursor-pointer text-xl sm:text-3xl" />
                <FaLinkedin className="text-gray-600 cursor-pointer text-xl sm:text-3xl" />
              </div>
            </div>

            {/* form  */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-[10px]">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="p-2 border-b border-gray-700 basis-full sm:basis-[calc(65%-5px)]  bg-transparent text-white outline-0 focus:border-white placeholder:text-sm"
                  onChange={(e) => newsLetterStateHandler(e)}
                />
                <button
                  className="bg-blue-400 basis-full sm:basis-[calc(35%-5px)] p-2 uppercase text-xs"
                  onClick={subscriptionNewsLetterHandler}
                >
                  Subscribe To Newsletter
                </button>
              </div>

              <div className="mt-8 flex items-center">
                <input
                  className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
                  type="checkbox"
                  id="newsletterCheck"
                />
                <label
                  htmlFor="newsletterCheck"
                  className="ml-3 text-white text-xs md:text-sm"
                >
                  Yes i'd like to receive bussiness email and agree with{" "}
                  <Link href="/termsandcondition" passHref>
                    <a>terms and condition</a>
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-full lg:basis-[calc(50%-10px)] mt-5 lg:mt-0 text-white">
          <div className="flex flex-wrap gap-[10px] sm:gap-[6.67px]">
            <div className="basis-[calc(50%-5px)] p-3 pl-0 sm:basis-[calc(25%-5px)]">
              <h4 className="uppercase text-xs sm:text-sm">company</h4>
              <ul className="mt-5 capitalize text-xs sm:text-sm">
                <li>about us</li>
                <li>policies</li>
                <li>pricing</li>
                <li>meet out team</li>
                <li>accreditation</li>
              </ul>
            </div>

            <div className="basis-[calc(50%-5px)] p-3 pl-0 sm:basis-[calc(25%-5px)]">
              <h4 className="uppercase text-xs sm:text-sm">service</h4>
              <ul className=" mt-5 capitalize  text-xs sm:text-sm">
                <li>works</li>
                <li>search profiles</li>
                <li>licensing</li>
                <li>resources</li>
                <li>upcomming events</li>
              </ul>
            </div>

            <div className="basis-[calc(50%-5px)] p-3 pl-0 sm:basis-[calc(25%-5px)]">
              <h4 className="uppercase text-xs sm:text-sm">learn</h4>
              <ul className="mt-5 capitalize  text-xs sm:text-sm">
                <li>UX Design</li>
                <li>Creative Skills</li>
                <li>community</li>
                <li>bussiness resources</li>
                <li>free tools</li>
              </ul>
            </div>

            <div className="basis-[calc(50%-5px)] p-3 pl-0 sm:basis-[calc(25%-5px)]">
              <h4 className="uppercase text-xs sm:text-sm">collaborate</h4>
              <ul className="mt-5 capitalize  text-xs sm:text-sm">
                <li>partner with us</li>
                <li>become an affiliate</li>
                <li>FAQ'S</li>
                <li>works with us</li>
                <li>contact us</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-3 pl-0">
            <ul className="flex text-xs flex-col sm:flex-row space-y-2 sm:space-y-0">
              <li className="sm:border-r-2 sm:grow border-gray-400 pr-2 uppercase">
                <Link href="#">Terms of bussiness</Link>
              </li>
              <li className="sm:border-r-2 sm:grow border-gray-400 sm:px-2  uppercase">
                <Link href="#">data usage &amp; privacy policy</Link>
              </li>
              <li className="sm:border-r-2 sm:grow border-gray-400 sm:px-2  uppercase">
                <Link href="#">cancellation policy</Link>
              </li>
              <li className="sm:border-r-2 sm:grow border-gray-400 sm:px-2  uppercase">
                <Link href="#">our ethics statement</Link>
              </li>
              <li className="sm:pl-2 sm:grow uppercase">
                <Link href="#">sitemap</Link>
              </li>
            </ul>

            <p className="mt-6 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aliquam cumque facilis cupiditate similique excepturi
              voluptates dolor eum a. Iste adipisci animi mollitia nobis, quis
              deleniti expedita quam laudantium harum.
            </p>
            <p className="mt-4 text-xs sm:text-sm">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

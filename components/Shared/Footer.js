import React from "react";
import Link from "next/link";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0F192D] py-20">
      <div className="sm:w-[90%] mx-auto flex flex-col sm:flex-row">
        <div className="border border-green-600 basis-full sm:basis-1/2">
          <h2 className="text-white text-6xl">E</h2>
          <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="mt-24">
            <div className="border border-red-500 flex flex-col sm:flex-row">
              {/* newsletter  */}
              <div className="border pr-3 sm:grow">
                <h2 className="text-3xl text-white">Get Our Newsletter</h2>
                <p className="mt-3 text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              {/* socil icons  */}
              <div className="border border-green-600 flex gap-3 mt-2 sm:mt-2 sm:self-end">
                <FaFacebookSquare className="text-gray-600 cursor-pointer text-3xl" />
                <FaInstagram className="text-gray-600 cursor-pointer text-3xl" />
                <FaTwitter className="text-gray-600 cursor-pointer text-3xl" />
                <FaYoutube className="text-gray-600 cursor-pointer text-3xl" />
                <FaLinkedin className="text-gray-600 cursor-pointer text-3xl" />
              </div>
            </div>

            {/* form  */}
            <div className="mt-8">
              <div className="flex flex-row flex-wrap">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="p-2 border border-gray-700 basis-10/12 sm:basis-6/12 bg-transparent text-white outline-0 focus:border-white"
                />
                <button className="bg-blue-400 mt-2 sm:mt-0 p-2 basis-10/12  sm:basis-5/12 uppercase">
                  Subscribe To Newsletter
                </button>
              </div>

              <div className="mt-8 flex items-center">
                <input
                  className="w-[25px] h-[25px]"
                  type="checkbox"
                  id="newsletterCheck"
                />
                <label htmlFor="newsletterCheck" className="ml-3 text-white">
                  Yes i'd like to receive bussiness email and agree with{" "}
                  <a href="/termsandcondition">terms and condition</a>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-indigo-500 basis-full sm:basis-1/2 text-white">
          <div className="flex">
            <div className="border border-red-500 basis-1/4 px-2">
              <h4 className="uppercase">company</h4>
              <ul className="border border-white mt-5 capitalize">
                <li>about us</li>
                <li>policies</li>
                <li>pricing</li>
                <li>meet out team</li>
                <li>accreditation</li>
              </ul>
            </div>

            <div className="border border-green-500 basis-1/4 px-2">
              <h4 className="uppercase">service</h4>
              <ul className="border border-white mt-5 capitalize">
                <li>works</li>
                <li>search profiles</li>
                <li>licensing</li>
                <li>resources</li>
                <li>upcomming events</li>
              </ul>
            </div>

            <div className="border border-yellow-500 basis-1/4 px-2">
              <h4 className="uppercase">learn</h4>
              <ul className="border border-white mt-5 capitalize">
                <li>UX Design</li>
                <li>Creative Skills</li>
                <li>community</li>
                <li>bussiness resources</li>
                <li>free tools</li>
              </ul>
            </div>

            <div className="border border-green-500 basis-1/4 px-2">
              <h4 className="uppercase">collaborate</h4>
              <ul className="border border-white mt-5 capitalize">
                <li>partner with us</li>
                <li>become an affiliate</li>
                <li>FAQ'S</li>
                <li>works with us</li>
                <li>contact us</li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <ul className="border border-indigo-600 flex flex-wrap">
              <li className="border-r-2 border-gray-400 pr-2 text-sm uppercase">
                <Link href="#">Terms of bussiness</Link>
              </li>
              <li className="border-r-2 border-gray-400 px-2 text-sm uppercase">
                <Link href="#">data usage &amp; privacy policy</Link>
              </li>
              <li className="border-r-2 border-gray-400 px-2 text-sm uppercase">
                <Link href="#">cancellation policy</Link>
              </li>
              <li className="border-r-2 border-gray-400 px-2 text-sm uppercase">
                <Link href="#">our ethics statement</Link>
              </li>
              <li className="pl-2 text-sm uppercase">
                <Link href="#">sitemap</Link>
              </li>
            </ul>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aliquam cumque facilis cupiditate similique excepturi
              voluptates dolor eum a. Iste adipisci animi mollitia nobis, quis
              deleniti expedita quam laudantium harum.
            </p>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

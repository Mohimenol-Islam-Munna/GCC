import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// icons
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  // toggle menu handler
  const toggleMenuHandler = () => {
    console.log("toggle menu handler");
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="bg-gray-100">
      <div
        className={`sm:w-[90%] mx-auto relative ${
          !toggleMenu ? "pt-7 pb-7" : "pt-5"
        } sm:py-5`}
      >
        {/* responsive menu button  */}
        <button
          type="button"
          className={`mr-2 p-1 absolute right-0 top-3 text-2xl sm:hidden ${
            toggleMenu ? "hover:text-red-500" : "hover:text-indigo-500"
          }`}
          onClick={toggleMenuHandler}
        >
          {toggleMenu ? <CgClose /> : <GiHamburgerMenu />}
        </button>

        {/* leftside  */}
        <ul
          className={`${toggleMenu ? "flex" : "hidden"} sm:flex
           flex-col sm:flex-row mt-9 sm:mt-0 transition-all duration-1000 text-center sm:items-center text-sm md:text-md`}
        >
          <li className="sm:mr-2.5 py-2 uppercase border-b sm:border-b-0  hover:bg-gray-200 font-medium">
            <Link href="/" passHref>
              <a
                className={`${
                  router.pathname === "/"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="sm:mr-2.5 py-2 uppercase  border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/service">
              <a
                className={`${
                  router.pathname === "/service"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Service
              </a>
            </Link>
          </li>
          <li className="sm:mr-2.5 py-2 uppercase  border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/pricing">
              <a
                className={`${
                  router.pathname === "/pricing"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Pricing
              </a>
            </Link>
          </li>
          <li className="sm:mr-2.5 py-2 uppercase  border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/resources">
              <a
                className={`${
                  router.pathname === "/resources"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Resources
              </a>
            </Link>
          </li>
          <li className="sm:mr-2.5 py-2 uppercase  border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/enterprise">
              <a
                className={`${
                  router.pathname === "/enterprise"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Enterprise
              </a>
            </Link>
          </li>

          {/* right side  */}
          <li className="sm:ml-auto sm:mr-2.5 flex justify-center items-center py-2 border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/lanuage">
              <a
                className={`${
                  router.pathname === "/lanuage"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                <TbWorld className="text-3xl" />
              </a>
            </Link>
          </li>
          <li className="sm:mr-2.5 py-2 uppercase border-b sm:border-b-0 hover:bg-gray-200 font-medium">
            <Link href="/login">
              <a
                className={`${
                  router.pathname === "/login"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Login
              </a>
            </Link>
          </li>
          <li className="py-2 uppercase hover:bg-gray-200 font-medium">
            <Link href="/contact-sales">
              <a
                className={`${
                  router.pathname === "/contact-sales"
                    ? "border-b-4 pb-1 border-indigo-500"
                    : ""
                }`}
              >
                Contact Sales
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

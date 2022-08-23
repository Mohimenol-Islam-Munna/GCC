import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

// components
import MainContent from "../../components/articleDetails/MainContent";
import RelatedArticles from "../../components/articleDetails/RelatedArticles";
import RightSideBar from "../../components/articleDetails/RightSideBar";
import SocialShare from "../../components/articleDetails/SocialShare";

// export const getStaticPaths = async () => {
//   return {
//     path: [],
//   };
// };

// export const getStaticProps = async (context) => {
//   return {
//     props: {
//       data: "munna",
//     },
//   };
// };

const Article = () => {
  return (
    <div className="relative">
      <div className="w-[90%] mx-auto">
        {/* content  */}
        <div>
          <p className="flex items-center gap-2 cursor-pointer my-10">
            <BsArrowLeftCircle />
            <span className="capitalize text-sm">back to home page</span>
          </p>
          <div className="flex gap-[10px]">
            {/* main content  */}
            <div className="basis-[calc(70%-5px)]">
              <MainContent />
            </div>
            {/* right sidebar  */}
            <div className="basis-[calc(30%-5px)]">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
      {/* related articles  */}
      <div className="mt-5 py-5">
        <RelatedArticles />
      </div>
      {/* social share icons  */}
      <SocialShare />
    </div>
  );
};

export default Article;

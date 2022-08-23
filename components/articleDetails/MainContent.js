import React from "react";
import { BsBookmark } from "react-icons/bs";

function MainContent() {
  return (
    <div className="md:pr-8">
      <button className="bg-indigo-400 px-4 py-1 text-white">acticle</button>
      <div className="mt-5">
        <h2 className="text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ab
          officiis sed quos repellendus. Sequi.
        </h2>
        <div className="flex flex-wrap gap-4 my-5">
          <p className="text-xs">
            Md Mohimenol Islam Munna on September 3, 2022
          </p>
          <p className="text-xs flex items-center gap-2 cursor-pointer">
            <BsBookmark />
            <span className="capitalize">save this articles</span>
          </p>
        </div>

        {/* content  */}
        <div className="py-10">
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            sapiente eius inventore nihil eaque. Quibusdam alias, tempora
            voluptatum excepturi necessitatibus fugiat, id adipisci dignissimos
            commodi perferendis voluptates rem laborum ut corrupti totam quasi
            blanditiis quia cupiditate. Pariatur laboriosam tenetur, distinctio
            nihil, harum quisquam modi quos cumque omnis exercitationem ex
            accusamus recusandae aut. Omnis commodi dolorem iure natus tempore
            sit qui, facere architecto, amet exercitationem, magnam recusandae
            magni aliquam doloremque. Assumenda ducimus, esse ipsam hic
            laboriosam asperiores repudiandae nihil voluptates veniam mollitia
            quia totam ut officiis accusantium, omnis ipsum iste quam odit!
            Minima, hic veritatis doloribus ut ullam non possimus nesciunt.
          </p>

          <div className=" my-10 py-10 flex flex-wrap sm:flex-nowrap gap-[20px]">
            {/* summary  */}
            <div className="text-md basis-full border-l-4 border-indigo-400 pl-4 sm:basis-[calc(50%-10px)]">
              <h2 className="text-3xl capitalize text-indigo-400">summary</h2>
              <p className="text-md mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                sapiente eius inventore nihil eaque. Quibusdam alias, tempora
                voluptatum excepturi necessitatibus fugiat, id adipisci
                dignissimos commodi perferendis voluptates rem laborum ut
                corrupti totam quasi blanditiis quia cupiditate.
              </p>
            </div>

            {/* image  */}
            <div className="basis-full sm:basis-[calc(50%-10px)] h-[200px]">
              <img
                src="/images/demoImage.jpg"
                alt="acticle_details_image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            sapiente eius inventore nihil eaque. Quibusdam alias, tempora
            voluptatum excepturi necessitatibus fugiat, id adipisci dignissimos
            commodi perferendis voluptates rem laborum ut corrupti totam quasi
            blanditiis quia cupiditate. Pariatur laboriosam tenetur, distinctio
            nihil, harum quisquam modi quos cumque omnis exercitationem ex
            accusamus recusandae aut. Omnis commodi dolorem iure natus tempore
            sit qui, facere architecto, amet exercitationem, magnam recusandae
            magni aliquam doloremque. Assumenda ducimus, esse ipsam hic
            laboriosam asperiores repudiandae nihil voluptates veniam mollitia
            quia totam ut officiis accusantium, omnis ipsum iste quam odit!
            Minima, hic veritatis doloribus ut ullam non possimus nesciunt.
          </p>
        </div>

        {/* article tags  */}
        <div>
          <h3 className="text-md uppercase">article tages</h3>
          <div className="flex gap-2 flex-wrap my-3">
            <button className="border capitalize border-gray-500 px-3 py-1">
              graphic design
            </button>
            <button className="border capitalize border-gray-500 px-3 py-1">
              maagento
            </button>
            <button className="border capitalize border-gray-500 px-3 py-1">
              project management
            </button>
            <button className="border capitalize border-gray-500 px-3 py-1">
              marketing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

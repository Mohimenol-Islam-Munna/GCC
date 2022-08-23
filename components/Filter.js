import React from "react";

const Filter = ({searchKeyWordHandler}) => {
  return (
    <div className="py-10">
      <input
        type="text"
        placeholder="Search Keywords"
        className="w-full p-2 border-b border-gray-700 bg-transparent
         outline-0 focus:border-indigo-400 placeholder:text-lg"
         onChange={(e)=> searchKeyWordHandler(e)}
      />
      <div className="mt-14">
        <label htmlFor="" className="block mb-2 text-md">
          Filter By:
        </label>

        <div className="flex flex-wrap gap-2">
          {/* featured topics  */}
          <select
            name="featured_topics"
            id="featured_topics"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
          >
            <option value="first">featured topics</option>
            <option value="first">first option</option>
            <option value="first">first option</option>
            <option value="third">third option</option>
          </select>
          {/* type  */}
          <select
            name="type"
            id="type"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
          >
            <option value="first">type</option>
            <option value="first">first option</option>
            <option value="first">first option</option>
            <option value="third">third option</option>
          </select>
          {/* categories  */}
          <select
            name="categories"
            id="categories"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
          >
            <option value="first">categories</option>
            <option value="first">first option</option>
            <option value="first">first option</option>
            <option value="third">third option</option>
          </select>
          {/* trending_topics  */}
          <select
            name="trending_topics"
            id="trending_topics"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
          >
            <option value="first">trending topics</option>
            <option value="first">first option</option>
            <option value="first">first option</option>
            <option value="third">third option</option>
          </select>
          {/* more_filters  */}
          <select
            name="more_filters"
            id="more_filters"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
          >
            <option value="first">more filters</option>
            <option value="first">first option</option>
            <option value="first">first option</option>
            <option value="third">third option</option>
          </select>
        </div>
      </div>
      <div className="my-5 text-end">
        <button className="bg-indigo-400 px-4 py-2 text-white uppercase text-sm">
          Clear all filters
        </button>
      </div>
    </div>
  );
};

export default Filter;

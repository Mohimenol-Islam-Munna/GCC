import React from "react";

const Filter = ({
  filtersValue,
  searchKeyWordHandler,
  filtersValueHandler,
  allFiltersClearHandler,
}) => {
  return (
    <div className="py-10">
      <input
        type="text"
        placeholder="Search Keywords"
        className="w-full p-2 border-b border-gray-700 bg-transparent
         outline-0 focus:border-indigo-400 placeholder:text-lg"
        onChange={(e) => searchKeyWordHandler(e)}
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
            value={filtersValue.featuredTopics}
            onChange={(e) => filtersValueHandler(e, "featuredTopics")}
          >
            <option value="">featured topics</option>
            <option value="first1">first option</option>
            <option value="second1">second option</option>
            <option value="third1">third option</option>
          </select>
          {/* type  */}
          <select
            name="type"
            id="type"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
            value={filtersValue.type}
            onChange={(e) => filtersValueHandler(e, "type")}
          >
            <option value="">type</option>
            <option value="first2">first option</option>
            <option value="second2">second option</option>
            <option value="third2">third option</option>
          </select>
          {/* categories  */}
          <select
            name="categories"
            id="categories"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
            value={filtersValue.categories}
            onChange={(e) => filtersValueHandler(e, "categories")}
          >
            <option value="">categories</option>
            <option value="first3">first option</option>
            <option value="second3">second option</option>
            <option value="third3">third option</option>
          </select>
          {/* trending_topics  */}
          <select
            name="trending_topics"
            id="trending_topics"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
            value={filtersValue.trendingTopics}
            onChange={(e) => filtersValueHandler(e, "trendingTopics")}
          >
            <option value="">trending topics</option>
            <option value="first4">first option</option>
            <option value="second4">second option</option>
            <option value="third4">third option</option>
          </select>
          {/* more_filters  */}
          <select
            name="more_filters"
            id="more_filters"
            className="border border-gray-500 p-2 rounded bg-white grow capitalize text-sm"
            value={filtersValue.moreFilters}
            onChange={(e) => filtersValueHandler(e, "moreFilters")}
          >
            <option value="">more filters</option>
            <option value="first5">first option</option>
            <option value="second5">second option</option>
            <option value="third5">third option</option>
          </select>
        </div>
      </div>
      <div className="my-5 text-end">
        <button
          className="bg-indigo-400 px-4 py-2 text-white uppercase text-sm"
          onClick={allFiltersClearHandler}
        >
          Clear all filters
        </button>
      </div>
    </div>
  );
};

export default Filter;

import React, { useState, useEffect } from "react";
import axios from "axios";

// components
import Title from "../components/Shared/Title";
import Hero from "../components/Hero";
import Article from "../components/Article";
import BookAndDownload from "../components/BookAndDownloads";
import Events from "../components/Events";
import Subscription from "../components/Subscription";

const Home = () => {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [filtersValue, setFilterValues] = useState({
    featuredTopics: "",
    type: "",
    categories: "",
    trendingTopics: "",
    moreFilters: "",
  });

  // search keyword handler
  const searchKeyWordHandler = (e) => {
    console.log("searchKeyWordHandler :", e.target.value);
    setSearchKeywords(e.target.value);
  };

  // filters value handler
  const filtersValueHandler = (e, filterType) => {
    console.log("filter value ::", e.target.value);
    console.log("filter filterType ::", filterType);

    if (filterType === "featuredTopics") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          featuredTopics: e.target.value,
        };
      });
    } else if (filterType === "type") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          type: e.target.value,
        };
      });
    } else if (filterType === "categories") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          categories: e.target.value,
        };
      });
    } else if (filterType === "trendingTopics") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          trendingTopics: e.target.value,
        };
      });
    } else {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          moreFilters: e.target.value,
        };
      });
    }
  };

  // all filters clear handler 
  const allFiltersClearHandler = () => {
    setFilterValues((prevData) => {
      return {
        ...prevData,
        featuredTopics: "",
        type: "",
        categories: "",
        trendingTopics: "",
        moreFilters: "",
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      // for api call
      // const res = await axios.post(
      //   "endpoint",
      //   { data: e.target.value },
      //   {
      //     headers: {
      //       "Content-type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
      // );
    };

    if (searchKeywords) {
      fetchData();
    }
  }, [searchKeywords]);

  useEffect(() => {
    const fetchData = async () => {
      // for api call
      // const res = await axios.post(
      //   "endpoint",
      //   { data: filtersValue },
      //   {
      //     headers: {
      //       "Content-type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
      // );
    };

    fetchData();
  }, [filtersValue]);

  return (
    <div className="">
      <Title>GCC Limited</Title>
      <Hero />
      <Article
        filtersValue={filtersValue}
        searchKeyWordHandler={searchKeyWordHandler}
        allFiltersClearHandler={allFiltersClearHandler}
        filtersValueHandler={filtersValueHandler}
      />
      <BookAndDownload />
      <Events />
      <Subscription />
    </div>
  );
};

export default Home;

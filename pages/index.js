import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// components
import Title from "../components/Shared/Title";
import Hero from "../components/Hero";
import Article from "../components/Article";
import BookAndDownload from "../components/BookAndDownloads";
import Events from "../components/Events";
import Subscription from "../components/Subscription";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [searchKeywords, setSearchKeywords] = useState("");

  const searchKeyWordHandler = (e) => {
    console.log("searchKeyWordHandler :", e.target.value);
    setSearchKeywords(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch data called ::", searchKeywords);

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

  return (
    <div className="">
      <Title>GCC Limited</Title>
      <Hero />
      <Article searchKeyWordHandler={searchKeyWordHandler} />
      <BookAndDownload />
      <Events />
      <Subscription />
    </div>
  );
};

export default Home;

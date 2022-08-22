import Image from "next/image";

// components
import Title from "../components/Shared/Title";
import Hero from "../components/Hero";
import Article from "../components/Article";
import BookAndDownload from "../components/BookAndDownloads";
import Events from "../components/Events";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div className="">
      <div className="sm:w-[90%] mx-auto">
        <Title>GCC Limited</Title>
        <Hero />
        <Article />
        <BookAndDownload />
        <Events />
        <Subscription />
      </div>
    </div>
  );
};

export default Home;

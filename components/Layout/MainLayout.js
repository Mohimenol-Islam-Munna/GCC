import React, { useState, createContext } from "react";
import axios from "axios";

// components
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

export const GlobalContext = createContext();

const MainLayout = ({ children }) => {
  const [newsLetter, setNewsLetter] = useState("");

  // input email state handler
  const newsLetterStateHandler = (e) => {
    console.log("your inputed email :", e.target.value);

    setNewsLetter(e.target.value);
  };

  // submit email handler
  const subscriptionNewsLetterHandler = () => {
    // we can also check email is valid or not

    if (newsLetter) {
      console.log("your inputed email ::", newsLetter);
      // for api call
      // const res = await axios.post(
      //   "endpoint",
      //   { data: newsLetter },
      //   {
      //     headers: {
      //       "Content-type": "application/json",
      //       Accept: "application/json",
      //     },
      //   }
      // );
    } else {
      console.log("your inputed value is empty::");
      // through client side error
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        newsLetterStateHandler: newsLetterStateHandler,
        subscriptionNewsLetterHandler: subscriptionNewsLetterHandler,
      }}
    >
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};

export default MainLayout;

import React, { Children } from "react";

// components
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

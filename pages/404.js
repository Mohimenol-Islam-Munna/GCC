import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      404! Opps page not found
    </div>
  );
};

PageNotFound.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export default PageNotFound;

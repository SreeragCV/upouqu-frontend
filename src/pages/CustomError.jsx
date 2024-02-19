import React from "react";
import PageContent from "../components/PageContent/PageContent";
import errorimg from "../assets/error.png";

function CustomError({ title, message }) {
  return (
    <div
      style={{
        backgroundImage: `url(${errorimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontSize: '100px',
        color: 'black'
      }}
      className="h-screen pt-12"
    >
      <div className="mt-28 text-center">
        <PageContent title={title ? title : "An Error Occured!!!"}>
          {message ? message : "Please try again!"}
        </PageContent>
      </div>
    </div>
  );
}

export default CustomError;

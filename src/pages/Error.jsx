import React from "react";
import PageContent from "../components/PageContent/PageContent";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";
import errorimg from '../assets/error.png'

function Errors() {
  const error = useRouteError();

  let title = "An Error Occurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Page not found.";
    message = "Please try again...";
  }
  if (error.status === 401 || error.status === 402) {
    title = "Not Authorized";
    message = "Please login/signup to continue";
  }
  if (error.status === 500) {
    title = "Server Error";
    message = "Please try again...";
  }

  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${errorimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          fontSize: "80px",
          color: "black",
        }}
        className="h-screen pt-12"
      >
        <PageContent title={title}>{message}</PageContent>
      </div>
    </>
  );
}

export default Errors;

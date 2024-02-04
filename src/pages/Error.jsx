import React from "react";
import PageContent from "../components/PageContent/PageContent";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";

function Errors() {

  const error = useRouteError();
  console.log(error);

  let title = 'An Error Occurred!'
  let message = 'Something went wrong!'

  if(error.status === 404){
    title = "Page not found"
    message = "Please try again..."
  }
  if(error.status === 401 || error.status === 402){
    title = "Not Authorized"
    message = "Please login/signup to continue"
  }
  if(error.status === 500){
    title = "Server Error"
    message = "Please try again..."
  }

  return (
    <>
    <Header/>
      <PageContent title={title}>
        {message}
      </PageContent>
    </>
  );
}

export default Errors;

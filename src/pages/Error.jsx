import React from "react";
import PageContent from "../components/PageContent/PageContent";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header/Header";

function Errors() {

  const error = useRouteError();
  console.log(error);

  let title = 'An Error Occurred!'
  let message = 'Something went wrong!'

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

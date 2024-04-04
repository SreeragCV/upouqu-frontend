import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookForm from "../components/BookForm/BookForm";
import withAuth from "../HOC/withAuth";

function Contribute() {
  const data = useSelector((state) => state.auth);
  const isVerified = data.isVerified;


  return (
    <div>
      {isVerified && (
        <h1>
          <BookForm />
        </h1>
      )}
    </div>
  );
}

export default withAuth(Contribute);

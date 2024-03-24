import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm/BookForm";

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

export default Contribute;

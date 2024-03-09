import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm/BookForm";

function Contribute() {
  const data = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const isVerified = data.isVerified;

  useEffect(() => {
    if (!isVerified) {
      navigate("/redirect");
    }
  }, [data]);

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

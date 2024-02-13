import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm/BookForm";
import bgImage from "../assets/bgBook.jpg";

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
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "11px",
        backgroundSize: "1865px 1000px",
      }}
    >
      <h1>
        <BookForm />
      </h1>
    </div>
  );
}

export default Contribute;

import React from "react";
import BookList from "../components/BookList/BookList";

function Books() {
  return (
    <div className=" mt-20">
      {/* <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "500",
          fontSize: "2rem",
          marginTop: "2rem",
          textDecoration: "underline",
          textUnderlineOffset: "12px",
          textDecorationThickness: "2px",
        }}
      >
        find your favourite books here!
      </h1> */}
      <BookList title="Horror" />
      <BookList title="Comedy" />
      <BookList title="Psychology" />
      <BookList title="History" />
    </div>
  );
}

export default Books;

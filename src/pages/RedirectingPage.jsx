import React from "react";
import { Link } from "react-router-dom";

function RedirectingPage() {
  return (
      <div
        style={{ textAlign: "center", fontWeight: "bolder", margin: "250px" }}
      >
        <h1>You must login to contribute books..</h1>
        <Link style={{ color: "burlywood" }} to="/login">
          Login
        </Link>
      </div>
  );
}

export default RedirectingPage;

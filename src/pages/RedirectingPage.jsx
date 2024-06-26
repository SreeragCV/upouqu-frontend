import React from "react";
import { Link } from "react-router-dom";

function RedirectingPage() {
  return (
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: "center", fontWeight: "bolder", marginTop: '200px', fontSize: "26px" }}
      >
        <h1>You must login to chat, read or contribute books..</h1>
        <Link style={{ color: "rgb(179, 140, 90)" }} to="/login">
          Login
        </Link>
      </div>
  );
}

export default RedirectingPage;

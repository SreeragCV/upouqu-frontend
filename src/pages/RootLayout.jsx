import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import img from "../assets/chat.png";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RootLayout() {
  const navigate = useNavigate();
  const { isVerified } = useSelector((state) => state.auth);
  return (
    <>
      <Header />
      <ToastContainer />
      {isVerified && (
        <img
          onClick={() => navigate("/messages")}
          src={img}
          style={{
            width: "60px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          alt=""
        />
      )}
      <Outlet />
    </>
  );
}

export default RootLayout;

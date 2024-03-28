import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function RootLayout() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default RootLayout;

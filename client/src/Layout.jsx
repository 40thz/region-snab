import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import ArrowUp from "./components/ArrowUp/ArrowUp";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <ArrowUp />
    </>
  );
};

export default Layout;

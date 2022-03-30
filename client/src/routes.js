import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "@pages/Homepage";
import Layout from "./Layout";
import Aboutpage from "./pages/Aboutpage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Route>
    </Routes>
  );
};

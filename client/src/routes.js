import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "@pages/Homepage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

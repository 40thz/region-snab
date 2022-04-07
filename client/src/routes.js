import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "@pages/Homepage";
import Layout from "./Layout";
import Aboutpage from "./pages/Aboutpage";
import NotFound from "./components/NotFound/NotFound";
import Preloader from "./components/Preloader/Preloader";

import { useAction } from "./hooks/useActions";

export const useRoutes = () => {
  const { animateLoader } = useAction();

  React.useEffect(() => {
    window.addEventListener("load", () => {
      animateLoader();
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

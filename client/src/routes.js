import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "@pages/Homepage";
import Layout from "./Layout";
import Aboutpage from "./pages/Aboutpage";
import NotFound from "./components/NotFound/NotFound";
import Preloader from "./components/Preloader/Preloader";
import Directionspage from "./pages/Directionspage";

import { useAction } from "./hooks/useActions";
import ContactsPage from "./pages/ContactsPage";
import Vacancypage from "./pages/Vacancypage";

export const useRoutes = () => {
  const { animateLoader } = useAction();

  const location = useLocation();
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    window.addEventListener("load", () => {
      animateLoader();
    });
  });

  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="directions" element={<Directionspage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="vacancy/:id" element={<Vacancypage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

import React from "react";

export const useParallax = () => {
  const [offSetY, setOffSetY] = React.useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return offSetY;
};

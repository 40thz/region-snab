import React from "react";

export const useMobile = () => {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    window.screen.width <= 479 || window.screen.width <= 869
      ? setMobile(true)
      : setMobile(false);
  });

  return isMobile;
};

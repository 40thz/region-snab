import React from "react";
import Logo from "../Logo/Logo";
import Pattern from "../Pattern/Pattern";

import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useActions";

import cn from "classnames";

const Preloader = () => {
  const { removeLoader } = useAction();

  const preloader = useSelector((state) => state.preloader);

  React.useEffect(() => {
    setTimeout(() => {
      removeLoader();
      document.body.style.overflowY = "auto";
    }, 4000);
  }, [preloader]);

  return (
    <>
      <div
        style={{ background: "#1d232e" }}
        className={cn("preloader", { fadeOut: preloader.animation })}
      >
        <Logo className={cn({ gotop: preloader.animation })} />
        <Pattern />
      </div>
    </>
  );
};

export default Preloader;

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
    const timer = setTimeout(() => {
      removeLoader();
    }, 4000);
    document.body.style.overflowY = "auto";
    return clearTimeout(timer);
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

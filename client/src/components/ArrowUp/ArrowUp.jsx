import React from "react";
import cn from "classnames";
import { useParallax } from "../../hooks/useParallax";

const ArrowUp = () => {
  const offset = useParallax();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const option = { active: offset >= 500 };

  return (
    <div onClick={scrollTop} className={cn("arrowUp", option)}>
      <svg
        width="9"
        height="13"
        viewBox="0 0 9 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 12.02L7 6.52002L0.999999 1.02002"
          stroke="#F0F1F1"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default ArrowUp;

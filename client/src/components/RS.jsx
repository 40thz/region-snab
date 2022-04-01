import React from "react";
import cn from "classnames";

const RS = ({ color, animateText }) => {
  return (
    <div
      style={{ color: color }}
      className={cn("rs", { rsAnimation: animateText })}
    >
      RS
    </div>
  );
};

export default RS;

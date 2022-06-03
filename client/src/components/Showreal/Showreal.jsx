import React from "react";
// import sample from "@images/showreal.mp4";
const Showreal = () => {
  return (
    <div className="showreal">
      <video autoPlay loop muted>
        <source src="https://mygang.ru/storage/showreal.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Showreal;

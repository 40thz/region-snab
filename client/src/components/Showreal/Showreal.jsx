import React from "react";
import Iframe from "react-iframe";
// import sample from "@images/showreal.mp4";
const Showreal = () => {
  return (
    <div className="showreal">
      <div id="video">
        <iframe
          src="//www.youtube.com/embed/40g9QKsfBJM?autoplay=1&mute=1&loop=1&playlist=40g9QKsfBJM"
          name="youtube embed"
          allow="autoplay; encrypted-media"
          allowfullscreen
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Showreal;

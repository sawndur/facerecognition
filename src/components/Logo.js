import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logopic from "./robotics.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img alt="logo" src={logopic} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;

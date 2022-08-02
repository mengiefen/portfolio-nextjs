import Particles from "react-particles";
import React from "react";
import particlesConfig from "../../data/particlesConfig";

const Animation = () => {
  return (
    <Particles
      style={{ width: "100vw", height: "100vh" }}
      params={particlesConfig}
    />
  );
};

export default Animation;

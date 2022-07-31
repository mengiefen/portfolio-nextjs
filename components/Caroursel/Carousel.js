import React from "react";
import Container from "./Carousel.styled";
import Slider from "./Slider";

const Carousel = () => {
  return (
    <Container initial={{ opacity: 0.5 }} whileInView={{ opacity: 1 }}>
      <h2>
        My Projects
        <div className="border-bottom"></div>
      </h2>
      <Slider />
    </Container>
  );
};

export default Carousel;

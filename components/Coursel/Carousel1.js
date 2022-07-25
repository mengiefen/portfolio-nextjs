import React from 'react';
import Container from './Carousel1.styled';
import Slide from './Slide1';

const Carousel1 = () => {
  return (
    <Container>
      <h2>
        My Projects
        <div className="border-bottom"></div>
      </h2>
      <Slide />
    </Container>
  );
};

export default Carousel1;

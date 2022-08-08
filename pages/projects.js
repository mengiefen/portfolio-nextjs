import React from 'react';
import Container from './projects.styled';
import Slider from '../components/Caroursel/Slider';
import Layout from '../components/Layout/layout';

const Carousel = () => {
  return (
    <Layout>
      <Container>
        <h2>
          My Projects
          <div className="border-bottom"></div>
        </h2>
        <Slider />
      </Container>
    </Layout>
  );
};

export default Carousel;

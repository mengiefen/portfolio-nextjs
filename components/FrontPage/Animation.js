import Particles from 'react-particles';
import React from 'react';

const Animation = () => {
  return (
    <Particles
      style={{ width: '100vw', height: '100vh' }}
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['image', 'circle'],
            image: [
              {
                src: '/js.svg',
                height: 20,
                width: 23,
              },
              {
                src: '/react.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/css.png',
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default Animation;

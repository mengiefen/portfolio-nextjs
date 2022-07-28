import React, { useEffect, useLayoutEffect, useState } from 'react';
import Container from './Slider.styled';
import SlideItem from './SlideItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slideData from '../../data/carousel';

import { getWidth, rotateBack, rotateForward } from './slide';

const Slider = () => {
  const [width, setWidth] = useState(getWidth());
  const [slideDetail, setSlideDetail] = useState({
    start: 0,
    end: null,
    slides: [],
    slideWidth: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
      setSlideDetail({
        ...slideDetail,
        end: width - 1,
        slideWidth: width,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const windowWidth =
      window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
    setSlideDetail({
      start: 0,
      end: windowWidth - 1,
      slides: slideData.slice(0, windowWidth),
      slideWidth: windowWidth,
    });
  }, []);

  const handleClickRight = () => {
    setSlideDetail({
      ...slideDetail,
      ...rotateForward(
        slideData,
        slideDetail.start,
        slideDetail.end,
        slideDetail.slideWidth,
      ),
    });
  };

  const handleClickLeft = () => {
    setSlideDetail({
      ...slideDetail,
      ...rotateBack(
        slideData,
        slideDetail.start,
        slideDetail.end,
        slideDetail.slideWidth,
      ),
    });
  };

  return (
    <Container>
      <button
        type="button"
        className="arrow-left"
        id="left"
        onClick={handleClickLeft}
      >
        <FaChevronLeft />
      </button>
      {/* {slideData
        .filter(
          (slide, index) =>
            index >= slideDetail.start && index <= slideDetail.end,
        ) */}
      {slideDetail.slides.map((slide, index) => (
        <SlideItem key={slide.id} slide={slide} />
      ))}
      <button
        type="button"
        className="arrow-right"
        id="right"
        onClick={handleClickRight}
      >
        <FaChevronRight />
      </button>
      {/* 
      <div className="slide-dots">
        {.map((slide, index) => (
          <span className="dot" key={slide.id}></span>
        ))}
      </div> */}
    </Container>
  );
};

export default Slider;

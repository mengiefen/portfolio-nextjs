import React, { useEffect, useState } from 'react';
import Container from './Slide1.styled';
import SlideItem from './SlideItem';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slideData from '../../data/carousel';

const Slides = () => {
  // const slides = useRef(
  //   slideData
  //       .filter(
  //         (slide, index) =>
  //           index >= slideDetail.start && index <= slideDetail.end,
  //       )
  // );

  const [slideDetail, setSlideDetail] = useState({
    start: 0,
    end: 0,
    total: slideData.length - 1,
    slideWidth: window.innerWidth > 768 ? 2 : 1,
    slideCount: null,
  });

  useEffect(() => {
    setSlideDetail({
      ...slideDetail,
      slideCount: Math.ceil((slideDetail.total + 1) / slideDetail.slideWidth),
      end: window.innerWidth > 768 ? 2 : 1,
    });
  }, []);

  const handleClickRight = () => {
    if (slideDetail.end < slideDetail.total) {
      setSlideDetail({
        ...slideDetail,
        start: slideDetail.start + 2,
        end: slideDetail.end + 2,
      });
    } else {
      setSlideDetail({
        ...slideDetail,
        start: 0,
        end: slideDetail.slideWidth,
      });
    }
  };

  const handleClickLeft = () => {
    if (slideDetail.start > 0) {
      setSlideDetail({
        ...slideDetail,
        start: slideDetail.start - 2,
        end: slideDetail.end - 2,
      });
    }

    if (slideDetail.start === 0) {
      setSlideDetail({
        ...slideDetail,
        start: slideDetail.total - slideDetail.slideWidth,
        end: slideDetail.total,
      });
    }
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
      {slideData
        .filter(
          (slide, index) =>
            index >= slideDetail.start && index <= slideDetail.end,
        )
        .map((slide, index) => (
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

export default Slides;

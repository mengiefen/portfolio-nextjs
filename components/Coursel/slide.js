import Slider from 'react-slick';
import SlideItem from './SlideItem';
import Container from './slide.styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slide = ({ sliderRef, slides, settings }) => {
  return (
    <Container>
      <button
        type="button"
        className="arrow-left"
        id="left"
        onClick={sliderRef?.slickPrev}
      >
        <FaChevronLeft />
      </button>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <SlideItem key={slide.id} slide={slide} />
        ))}
      </Slider>

      <button
        type="button"
        className="arrow-right"
        id="right"
        onClick={sliderRef?.slickNext}
      >
        <FaChevronRight />
      </button>
    </Container>
  );
};

export default Slide;

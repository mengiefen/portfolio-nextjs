import Image from 'next/image';
import Button from '../Buttons/buttons';
import Slider from 'react-slick';
import SlideItem from './slide.styled';

const Slide = ({ slides, settings }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <SlideItem key={slide.id}>
          <div className="slider-detail">
            <h2 className="title">{slide.title}</h2>
            <p className="desc">{slide.desc}</p>
            <Button text="See project" />
          </div>
          <Image
            src={slide.img}
            width={900}
            height={600}
            alt="desktop"
            className="slide-img"
          />
        </SlideItem>
      ))}
    </Slider>
  );
};

export default Slide;

import React, { useRef, useEffect, useState } from "react";
import Container from "./Slider.styled";
import SlideItem from "./SlideItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slideData from "../../data/carousel";
import { getWidth, rotateBack, rotateForward } from "./slide";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";

const Slider = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={false}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slideData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <SlideItem slide={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;

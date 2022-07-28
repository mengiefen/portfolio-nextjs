import { useState, useRef } from 'react';
import Image from 'next/image';
import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './carousel.styled';
import Slide from './slide';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import desktop from '../../public/coursel/desktop.png';
// import bookStore from '../../public/coursel/book-store.png';
import covid19 from '../../public/coursel/covid-19.png';
import covidA from '../../public/coursel/covid-a.png';
import portfolio from '../../public/coursel/portfolio-mockup.png';
import portfolio1 from '../../public/coursel/portfolio-mockup1.png';

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      img: desktop,
      title: 'Sample titile',
      desc: 'Sample description for the carousel component',
    },
    {
      id: 2,
      img: portfolio,
      title: 'Sample titile',
      desc: 'Sample description for the carousel component',
    },
    {
      id: 3,
      img: portfolio1,
      title: 'Sample titile',
      desc: 'Sample description for the carousel component',
    },
    {
      id: 4,
      img: covidA,
      title: 'Sample titile',
      desc: 'Sample description for the carousel component',
    },
    {
      id: 5,
      img: covid19,
      title: 'Covid 19 Info Center',
      desc: 'The Covid-19 Info Center App is a website built with React. In this application, the user is able to see covid-19 data. The user can search by country and be able to see updated covid information. Therefore, the app has the following features: Categorizes the countries in the continent for easy access. Access the list of countries data.       Select a single country and access the countrys detailed daily update.',
    },
  ];

  return (
    <Container>
      <h2>
        My Projects
        <div className="border-bottom"></div>
      </h2>
      <Slide
        settings={settings}
        slides={slides}
        sliderRef={sliderRef}
        setSliderRef={setSliderRef}
      />
    </Container>
  );
}

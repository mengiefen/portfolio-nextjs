import Image from 'next/image';
import React from 'react';
import Container from './SlideItem.styled';
import Link from 'next/link';
import { VscArrowSmallRight } from 'react-icons/vsc';

const SlideItem = ({ slide }) => {
  return (
    <Container>
      <h2 className="title">{slide.title}</h2>
      <div className="image-holder">
        <Image
          src={slide.img}
          width={900}
          height={600}
          alt="desktop"
          className="slide-img move-down"
        />
      </div>

      <div className="slide-info">
        <p className="desc">{slide.desc}</p>
        <div className="project-tech">
          <span>REACT</span>
          <span>Redux</span>
          <span>SASS</span>
        </div>
        <div className="project-links">
          <Link
            href="https://www.linkedin.com/in/mengstufentaw/"
            className="project-link"
          >
            <a target="_blank">
              See source <VscArrowSmallRight />{' '}
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mengstufentaw/"
            className="project-link"
          >
            <a target="_blank">
              Live demo <VscArrowSmallRight />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SlideItem;
// 0989 72 04 22

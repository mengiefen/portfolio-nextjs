import Image from 'next/image';
import React from 'react';
import Container from './SlideItem.styled';
import Link from 'next/link';
import { VscArrowSmallRight } from 'react-icons/vsc';

const SlideItem = ({ slide }) => {
  return (
    <Container
      whileHover={{
        y: -1,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2
        className="title"
        style={{ backgroundColor: slide.badge, color: slide.textColor }}
      >
        {slide.title}
      </h2>
      <div className="image-holder">
        <Image
          src={slide.img}
          width={920}
          height={600}
          alt="desktop"
          className="slide-img move-down"
        />
      </div>

      <div className="slide-info">
        <p className="desc">{slide.desc}</p>
        <div className="project-tech">
          {slide.techs.map((tech) => {
            return <span key={tech}>{tech}</span>;
          })}
        </div>
        <div className="project-links">
          <Link href={slide.sourceLink} className="project-link">
            <a target="_blank">
              See source <VscArrowSmallRight />{' '}
            </a>
          </Link>
          <Link href={slide.liveLink} className="project-link">
            <a target="_blank">
              See Live <VscArrowSmallRight />
            </a>
          </Link>
        </div>
      </div>
      <div
        className="border-decor"
        style={{ backgroundColor: slide.badge, color: slide.textColor }}
      ></div>
    </Container>
  );
};

export default SlideItem;
// 0989 72 04 22

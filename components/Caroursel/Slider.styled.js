import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 620px;
  gap: 1rem;
  position: relative;

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.75rem;
    z-index: 111;
    border: none;
    background-color: #ed254eff;
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
  }

  .arrow-left {
    left: 2rem;
  }

  .arrow-right {
    right: 2rem;
  }

  .swiper {
    width: 90%;
    height: 620px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    width: 40px;
    height: 40px;
    background: #ed254eff;
    color: #fafafa;
    border: 1px solid gray;
    border-radius: 50%;
    font-weight: 700;
    outline: 0;
    transition: background-color 0.2s ease, color 0.2s ease;

    &::after {
      font-size: 16px;
    }
  }

  .swiper-button-prev {
    &::after {
      position: relative;
      left: -1px;
    }
  }

  .swiper-button-next {
    &::after {
      position: relative;
      left: 1px;
    }
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 10px;
    right: auto;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0.5;
    cursor: auto;
    pointer-events: none;
  }
`;

export default Container;

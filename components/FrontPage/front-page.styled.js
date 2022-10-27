import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bg1};
  background: linear-gradient(
    65deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.bg} 10%,
    ${(props) => props.theme.bg1} 90%,
    ${(props) => props.theme.green} 100%
  );
  position: relative;

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 100vw;
    align-items: start;
    margin: 0;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    min-height: 80vh;
  }

  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    padding: 0 3%;
    padding-top: 2.5rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      margin-top: 4rem;
      max-width: 70%;
      align-items: start;
      padding-top: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      flex-direction: column;
      flex: 2;
      max-width: 85%;
      align-items: center;
      padding: 5rem 1% 0 3%;
    }
  }

  .heading {
    color: ${(props) => props.theme.primary};
    font-size: min(7.5vw, 4rem);
    text-transform: capitalize;
    line-height: 1.5;
    letter-spacing: 10px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    /* font-family: 'Arbutus', cursive; */
    /* font-family: 'Bebas Neue', cursive; */
    /* font-family: 'Edu TAS Beginner', cursive; */
    /* font-family: 'Margarine', cursive; */
    /* font-family: 'Nova Oval', cursive; */
    /* font-family: 'Pacifico', cursive; */
    /* font-family: 'Yatra One', cursive; */
    font-family: 'Zen Dots', cursive;
    font-family: 'Oregano', cursive;

    @media (max-width: ${({ theme }) => theme.device.laptop}) {
      font-size: min(2.75vw, 1.5rem);
    }

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      padding-left: 1rem;
      text-align: center;
      font-size: min(4vw, 1.75rem);
    }
  }

  .greeting {
    font-size: min(2.5vw, 1.5rem);
  }

  .wave {
    animation-name: wave;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .sub-heading {
    font-size: min(4vw, 2rem);
    letter-spacing: 3px;
    padding-left: 2rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-family: 'Bebas Neue', cursive;
    font-family: 'Edu TAS Beginner', cursive;
    font-family: 'Zen Dots', cursive;
    font-family: 'Oregano', cursive;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      padding-left: 1rem;
      font-size: min(5vw, 1.2rem);
    }

    span {
      color: ${(props) => props.theme.secondary};
    }
  }

  .paragraph {
    font-weight: 400;
    line-height: 1.5;
    color: ${(props) => props.theme.primary};
    padding-left: 2rem;
    padding-bottom: 2rem;
    max-width: 600px;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      padding-left: 1rem;
      text-align: left;
    }
  }

  figure {
    max-width: 500px;
    width: auto;
    position: relative;
    display: flex;
    align-items: flex-end;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      position: absolute;
      height: auto;
      bottom: 0;
      right: -10%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      position: absolute;
      height: auto;
      bottom: 30%;
      right: -20%;
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      height: auto;
      position: absolute;
      top: 20%;
      right: -10%;
      display: none;
    }
  }

  .img {
    clip-path: polygon(50% 100%, 100% 70%, 75% 0, 25% 0, 0% 70%);
    opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.5 : 0.2)};

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      width: 100%;
      height: auto;
      opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0 : 0.2)};
    }
  }

  .overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: ${(props) => props.theme.bg}; */
    opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.3 : 0.9)};
    z-index: 10;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.75 : 0.9)};
    }
  }
`;

export default Container;

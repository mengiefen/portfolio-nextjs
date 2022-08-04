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
    ${(props) => props.theme.bg} 15%,
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
    padding-top: 10rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      margin-top: 4rem;
      max-width: 70%;
      align-items: start;
      padding-top: 5rem;
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
    font-size: min(3.5vw, 2rem);
    text-transform: capitalize;
    line-height: 0;
    letter-spacing: 4px;
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Edu TAS Beginner', cursive;
    /* font-family: 'Arbutus', cursive; */
    /* font-family: 'Bebas Neue', cursive; */
    /* font-family: 'Edu TAS Beginner', cursive; */
    /* font-family: 'Margarine', cursive; */
    /* font-family: 'Nova Oval', cursive; */
    /* font-family: 'Pacifico', cursive; */
    font-family: 'Yatra One', cursive;
    font-family: 'Zen Dots', cursive;

    @media (max-width: ${({ theme }) => theme.device.laptop}) {
      font-size: min(2.75vw, 1.5rem);
    }

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      padding-left: 1rem;
      text-align: center;
      font-size: min(4vw, 1.75rem);
    }
  }

  .sub-heading {
    font-size: min(4vw, 1.2rem);
    letter-spacing: 3px;
    padding-left: 2rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-family: 'Bebas Neue', cursive;
    font-family: 'Edu TAS Beginner', cursive;
    font-family: 'Zen Dots', cursive;

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

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      padding-left: 1rem;
      text-align: left;
    }
  }

  figure {
    max-width: 40%;
    height: 93vh;
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
    }

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      height: auto;
      position: absolute;
      bottom: 20%;
      right: -10%;
    }
  }

  .img {
    clip-path: polygon(50% 100%, 100% 38%, 75% 0, 25% 0, 0% 38%);
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

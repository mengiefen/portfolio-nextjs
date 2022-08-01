import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bg1};
  background: linear-gradient(
    65deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.bg} 15%,
    ${(props) => props.theme.bg1} 90%,
    ${(props) => props.theme.green} 100%
  );

  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    padding: 0 3%;
    margin-left: 2rem;
    padding-top: 10rem;
  }

  .heading {
    color: ${(props) => props.theme.primary};
    font-size: min(3.5vw, 1.5rem);
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
  }

  figure {
    max-width: 40%;
    height: 93vh;
    position: relative;
    display: flex;
    align-items: flex-end;
  }

  .img {
    clip-path: polygon(50% 100%, 100% 38%, 75% 0, 25% 0, 0% 38%);
    opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.5 : 0.2)};
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
  }
`;

export default Container;

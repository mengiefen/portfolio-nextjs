import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};

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
    font-size: min(7.5vw, 2rem);
    text-transform: capitalize;
    line-height: 0;
    letter-spacing: 4px;
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
    font-family: 'Edu TAS Beginner', cursive;
    padding: 0;
    margin: 0;

    span {
      color: ${(props) => props.theme.secondary};
    }
  }

  .sub-heading {
    font-size: min(5vw, 3.5rem);
    letter-spacing: 3px;
    padding-left: 2rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-family: 'Bebas Neue', cursive;
    font-family: 'Edu TAS Beginner', cursive;
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
  }

  .overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bg};
    opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.3 : 0.9)};
    z-index: 10;
  }
`;

export default Container;

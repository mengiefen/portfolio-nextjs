import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 90%;
  max-width: 350px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0 0 5px ${({ theme }) => theme.gray};
  border-radius: 10px;
  padding: 1rem 0;
  transition: all 0.3s ease-in-out;

  .border-decor {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
  }

  /* Media Query to vary the size of the slide item */

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.tertiary};
    transform: translateY(-3px);
  }

  .slide-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-radius: 10px 10px 0 0;
    transition: all 1s ease-in-out;
    z-index: 111;
  }

  .title {
    text-transform: capitalize;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    /* color: ${({ theme }) => theme.tertiary}; */
    width: 100%;
    padding: 0.3rem 0;
    text-align: center;
    /* background-color: ${({ theme }) => theme.yellow}; */
    transform: rotate(-35deg) translateX(-32%) translateY(-70px);
    z-index: 1111;
    font-family: 'Edu TAS Beginner', cursive;
  }

  .desc {
    max-width: 90%;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.primary};
  }

  .image-holder {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bg};
  }

  .project-links {
    display: flex;
    gap: 2rem;
  }

  .project-link {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.primary};
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;

    &:hover {
      color: ${({ theme }) => theme.tertiary};
    }
  }

  .project-tech {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.primary};
  }

  .project-tech span {
    background-color: ${({ theme }) => theme.tertiary};
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
  }
`;

export default Container;

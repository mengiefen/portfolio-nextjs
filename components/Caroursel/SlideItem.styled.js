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

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    max-width: 70%;
    padding: 2rem 0;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    max-width: 80%;
    padding: 1rem 0;
  }

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
    width: 65%;
    padding: 0.3rem 0;
    text-align: center;
    transform: rotate(-35deg) translateX(-25%) translateY(-25px);
    z-index: 1111;
    font-family: 'Edu TAS Beginner', cursive;

    @media (max-width: ${({ theme }) => theme.device.laptopL}) {
      width: 75%;
    }

    @media (max-width: ${({ theme }) => theme.device.laptop}) {
      width: 70%;
    }

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      width: 65%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      width: 85%;
    }
  }

  .desc {
    max-width: 90%;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.primary};

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      width: 95%;
    }
  }

  .image-holder {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bg};
  }

  .project-links {
    display: flex;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      gap: 1rem;
    }
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

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      gap: 0.5rem;
    }
  }

  .project-tech span {
    background-color: ${({ theme }) => theme.gray};
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    transition: background-color 0.35s;

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
    }
  }
`;

export default Container;

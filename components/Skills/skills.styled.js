import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    65deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.bg} 15%,
    ${(props) => props.theme.bg1} 90%,
    ${(props) => props.theme.green} 100%
  );

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    height: auto;
  }

  .skill-title {
    text-transform: uppercase;
    padding-left: 5%;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    align-self: flex-start;
    color: ${({ theme }) => theme.primary};
  }

  .border-bottom {
    width: 80px;
    margin-bottom: 2rem;
    border-bottom: 4px solid ${({ theme }) => theme.tertiary};
    margin-left: 5%;
    align-self: start;
  }

  .skill-list {
    position: relative;
    padding: 1rem;
    width: 80%;
    height: 75%;
    background-color: ${({ theme }) => theme.bg};
    color: ${(props) => props.theme.bg};
    border-radius: 1rem;
    position: relative;
    box-shadow: 0 4px 16px 0 ${(props) => props.theme.gray};
    animation: infinite;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      width: 90%;
      height: auto;
      border-radius: 0.5rem;
    }
  }

  .languages {
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    /* animation: slideshowleft 40s linear infinite; */
  }

  .icon-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    top: 100%;
    padding: 0.5rem;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: 0 0 4px 0 ${(props) => props.theme.gray};

    :hover {
      transform: scale(1.05);
      box-shadow: 0 0 8px 0 ${(props) => props.theme.gray};
    }
  }

  .languages-1 {
    position: absolute;
    top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    animation: slideshowright 20s linear infinite;
  }

  .icon-holder-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    top: 100%;
    padding: 0.35rem;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: 0 0px 4px 0 ${(props) => props.theme.gray};

    :hover {
      transform: scale(1.05);
      box-shadow: 0 0 8px 0 ${(props) => props.theme.gray};
    }

    @keyframes slideshowleft {
      0% {
        left: 100%;
      }
      100% {
        left: -100%;
      }
    }

    @keyframes slideshowright {
      0% {
        left: -110%;
      }
      100% {
        left: 100%;
      }
    }
  }

  .prof-skill-set {
    width: 90%;
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 4rem auto;
    justify-items: center;
    gap: 0.75rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      grid-template-columns: 1fr 1fr;
      margin: 3rem auto;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      grid-template-columns: 1fr;
      margin: 3rem auto;
      gap: 3rem;
    }

    .prof-skills {
      display: flex;
      min-width: 35%;
      flex-direction: column;
      align-items: center;
      border-radius: 5px;
      padding: 1rem;
      box-shadow: 0 0 4px ${({ theme }) => theme.gray};
      transition: all 0.5s ease-in-out;

      &:hover,
      &:focus {
        transform: scale(1.01);
        box-shadow: 0 0 4px ${({ theme }) => theme.tertiary};

        @media (max-width: ${({ theme }) => theme.device.mobileL}) {
          transform: scale(1);
          align-items: start;
        }
      }

      @media (max-width: ${({ theme }) => theme.device.mobileL}) {
        flex-direction: row;
        width: 100%;
        position: relative;
      }
    }

    .skill-icon-holder {
      border-radius: 50%;
      /* border: 0.25px solid ${({ theme }) => theme.gray}; */
      box-shadow: 0 0 4px ${({ theme }) => theme.gray};
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.device.mobileL}) {
        flex: 1;
        padding: 0.75rem 0.5rem;
        width: auto;
        margin-right: 1rem;
      }
    }

    h3 {
      color: ${({ theme }) => theme.primary};
      letter-spacing: 1.2px;
      font-size: 1.2rem;
      text-align: center;
      text-transform: capitalize;

      @media (max-width: ${({ theme }) => theme.device.mobileL}) {
        flex: 1;
        position: absolute;
        top: -3.5rem;
        left: 0;
      }
    }

    .skill-desc {
      text-align: center;
      color: ${({ theme }) => theme.primary};

      @media (max-width: ${({ theme }) => theme.device.mobileL}) {
        flex: 3;
      }
    }
  }
`;

export default Container;

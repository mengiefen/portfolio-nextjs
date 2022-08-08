import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  width: 100%;
  min-height: 80vh;
  background-color: ${(props) => props.theme.bg1};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 3rem auto;
  background-image: url('img.svg');
  background-size: cover;

  background: linear-gradient(
    -65deg,
    ${(props) => props.theme.green} 0%,
    ${(props) => props.theme.bg1} 10%,
    ${(props) => props.theme.bg} 90%,
    ${(props) => props.theme.gray} 100%
  );

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding: 3rem auto;
    min-height: 70vh;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-right: 5%;
    padding-right: 2rem;
    height: 100%;
    border-radius: 0.5rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }
  }

  figure {
    background-image: url('./img.svg');
  }

  .img {
    flex: 1;
    align-self: center;
    filter: grayscale(0.7);
    border-radius: 50%;
    transition: filter 0.5s ease-in-out;
    width: 50%;
    height: auto;

    &:hover {
      filter: grayscale(0);
    }

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      width: auto;
      display: none;
    }
  }

  .desc {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.primary};
    flex: 2;
    align-items: flex-end;
    max-width: 70%;
    padding: 2rem;
    max-width: 800px;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      line-height: 1.75;
      padding: 0.5rem;
    }

    .general-desc {
      text-align: justify;
    }

    .general-desc-para-2 {
      margin-bottom: 4rem;
    }
  }

  .title {
    text-transform: uppercase;
    align-self: flex-end;
    font-size: 2rem;
    letter-spacing: 2.5px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .border-bottom {
    width: 80px;
    margin-bottom: 1rem;
    border-bottom: 4px solid ${({ theme }) => theme.tertiary};
    margin-left: auto;
  }

  .btn {
    max-width: 200px;
  }

  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .card-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
`;
export default Container;

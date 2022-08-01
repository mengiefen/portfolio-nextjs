import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg1};
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(
    -65deg,
    ${(props) => props.theme.green} 0%,
    ${(props) => props.theme.bg1} 10%,
    ${(props) => props.theme.bg} 85%,
    ${(props) => props.theme.gray} 100%
  );

  .content {
    display: flex;
    justify-content: center;
    width: 90%;
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
  }

  .desc {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.primary};
    line-height: 2;
    flex: 2;
    align-items: center;

    .general-desc {
      text-align: justify;
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

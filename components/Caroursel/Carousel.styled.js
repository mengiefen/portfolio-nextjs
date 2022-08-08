import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  color: ${(props) => props.theme.primary};
  background-color: ${({ theme }) => theme.bg};
  background: linear-gradient(
    -65deg,
    ${(props) => props.theme.green} 0%,
    ${(props) => props.theme.bg1} 10%,
    ${(props) => props.theme.bg} 90%,
    ${(props) => props.theme.gray} 100%
  );

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 1rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    align-self: flex-end;
    margin-right: 5%;
    padding-bottom: 0.5rem;
    letter-spacing: 2.5px;
  }

  .border-bottom {
    width: 40%;
    padding-top: 1rem;
    border-bottom: 4px solid ${({ theme }) => theme.tertiary};
    margin-right: 5%;
    margin-left: auto;
  }

  .left-btn {
    position: absolute;
    top: 50%;
    left: 0;
  }

  .right-btn {
    position: absolute;
    top: 50%;
    right: 0;
  }
`;

export default Container;

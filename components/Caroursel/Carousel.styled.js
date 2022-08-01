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

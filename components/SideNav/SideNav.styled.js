import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100px;
  z-index: 11111;
  background-color: ${(props) => props.theme.bg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .nav-items {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export default Nav;

import { motion } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
  position: absolute;
  top: min(10rem, 10vh);
  right: 0;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
  background-color: ${(props) => props.theme.bg};
  border-top: 1px solid ${(props) => props.theme.tertiary};

  .menu-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
  }

  .menu-item {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;

    a {
      text-decoration: none;
      padding-bottom: 0.3rem;
      color: ${(props) => props.theme.primary};
      transition: all 0.5s ease-in-out;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondary};
      }
    }
  }
`;

export default Nav;

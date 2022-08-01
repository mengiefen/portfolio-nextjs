import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = styled(motion.header)`
  position: absolute;
  top: 0;
  left: 0;
  height: min(10rem, 10vh);
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 0.5px solid ${(props) => props.theme.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1111;
  background: linear-gradient(
    -65deg,
    ${(props) => props.theme.green} 0%,
    ${(props) => props.theme.bg1} 10%,
    ${(props) => props.theme.bg} 95%,
    ${(props) => props.theme.gray} 100%
  );

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
  }

  .menu-icon {
    color: ${(props) => props.theme.primary};
    font-size: 2rem;
  }
`;

export default Header;

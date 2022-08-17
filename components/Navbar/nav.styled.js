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
  box-shadow: inset -1px 0   2px ${(props) => props.theme.gray};

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.bg1} 85%,
    ${(props) => props.theme.green} 100%
  );

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 65%;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    width: 100%;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
  align-items: center;
    list-style: none;
    gap: 1rem;
   
  }

  .menu-item {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    

    &:hover {
      transform: translateY(-3px);   
    }
 

    a {
      text-decoration: none;
      padding-bottom: 0.3rem;
      color: ${(props) => props.theme.primary};
      transition: all 0.5s ease-in-out;
      border-bottom: 2px solid transparent;     

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.secondary};
        letter-spacing: 3px;
        color: ${(props) => props.theme.tertiary};   
  
      }
    }
  }
`;

export default Nav;

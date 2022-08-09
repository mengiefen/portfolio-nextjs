import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 2.75rem;
  z-index: 11111;
  background-color: ${(props) => props.theme.gray};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid ${(props) => props.theme.gray};
  margin-bottom: 1rem;

  .nav-items {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  .nav-item {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .nav-link {
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.tertiary};
    cursor: pointer;
    position: relative;
    transition: all 0.4s ease-in-out;
    z-index: 1;

    .icon {
      font-size: 1.5rem;
      transition: all 0.4s ease-in-out;
      border-radius: 20%;
      padding: 0.1rem 0.4rem;
      /* box-shadow: 0 0 10px ${({ theme }) => theme.primary}; */
      /* border: 1px solid ${({ theme }) => theme.tertiary}; */
      transition: all 0.4s ease-in-out;
    }

    .text {
      display: none;

      position: absolute;
      top: 50%;
      transform: translateY(-60%);
      left: 2rem;
      padding: 0.5rem 1rem;
      /* background-color: ${({ theme }) => theme.bg}; */
      /* border: 1px solid ${({ theme }) => theme.tertiary};
      border-left: none; */
      border-radius: 0% 10px 10px 0%;
      z-index: 0;
      width: 0;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      .text {
        display: block;
        width: 100px;
      }

      .icon {
        transform: scale(1.1);
        box-shadow: 0 0 10px ${({ theme }) => theme.secondary};
      }
    }
  }
`;

export default Nav;

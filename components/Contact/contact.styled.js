import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  width: 90%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.primary};
  padding: 1rem 5%;

  .welcome {
    display: flex;
    flex-direction: column;

    h2 {
      text-transform: uppercase;
      font-size: 1.75rem;
      font-weight: 700;
    }
    p {
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
  form {
    width: 60%;
    text-align: right;
  }

  ul {
    list-style: none;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 1rem;
  }

  input {
    padding: 1rem 0.5rem;
    font-size: 1rem;
    outline: 2px solid transparent;
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.primary};
    border: 0.5px solid ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in;

    &:hover,
    &:focus {
      border: 0.5px solid transparent;
      outline: 2px solid ${({ theme }) => theme.secondary};
    }
  }

  textarea {
    padding: 0.5rem;
    font-size: large;
    outline: 2px solid transparent;
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.primary};
    border: 0.5px solid ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in;

    &:hover,
    &:focus {
      border: 0.5px solid transparent;
      outline: 2px solid ${({ theme }) => theme.secondary};
    }
  }
`;

export const Button = styled(motion.button)`
  background-color: ${(props) => props.theme.secondary};
  border: 2px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  min-width: 150px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease-out;
`;

export default Container;

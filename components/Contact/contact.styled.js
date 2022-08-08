import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  width: 90%;
  min-height: 70vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: start;
  color: ${(props) => props.theme.primary};
  padding: 3rem 5%;

  background: linear-gradient(
    65deg,
    ${(props) => props.theme.gray} 0%,
    ${(props) => props.theme.bg} 10%,
    ${(props) => props.theme.bg1} 90%,
    ${(props) => props.theme.green} 100%
  );

  .welcome {
    display: flex;
    flex-direction: column;

    h2 {
      text-transform: uppercase;
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: 2.5px;
    }

    .border-bottom {
      width: 80px;
      margin-bottom: 1rem;
      border-bottom: 4px solid ${({ theme }) => theme.tertiary};
    }

    p {
      font-weight: 400;
      line-height: 1.5;
      padding-left: 3rem;
      width: 80%;
      margin-bottom: 1rem;
      align-self: left;

      @media (max-width: ${({ theme }) => theme.device.tablet}) {
        margin-bottom: 0.5rem;
      }
    }
  }

  .form-holder {
    display: flex;
    gap: 5rem;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.device.laptop}) {
      gap: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      gap: 0rem;
    }

    .contact-image {
      display: block;
      @media (max-width: ${({ theme }) => theme.device.tablet}) {
        display: none;
      }
    }
  }

  form {
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.device.laptop}) {
      width: 60%;
    }

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileL}) {
      width: 95%;
    }

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 2rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      margin-bottom: 0.5rem;
    }
  }

  li {
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.device.tablet}) {
      margin-bottom: 0.5rem;
    }
  }

  input {
    padding: 0.8rem 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    outline: 2px solid transparent;
    border: none;
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.primary};
    border: 0.5px solid ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in;

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      width: 95%;
    }

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.bg};
      border: 0.5px solid ${({ theme }) => theme.green};
      box-shadow: 0 0 5px ${({ theme }) => theme.green};
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.primary} !important;
    box-shadow: 0 0 5px ${({ theme }) => theme.green};
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.bg} inset !important;
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

    @media (max-width: ${({ theme }) => theme.device.mobileS}) {
      width: 95%;
    }

    &:hover,
    &:focus {
      border: 0.5px solid ${({ theme }) => theme.green};
      box-shadow: 0 0 5px ${({ theme }) => theme.green};
    }
  }
`;

export const Button = styled(motion.button)`
  background-color: ${(props) => props.theme.tertiary};
  border: 2px solid ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.bg};
  min-width: 150px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  align-self: flex-end;

  &:hover {
    transform: scale(0.999);
    opacity: 0.8;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.tertiary};
  }
`;

export default Container;

import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledFooter = styled(motion.footer)`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-top: 0.5px solid ${(props) => props.theme.tertiary};

  background: linear-gradient(
    -35deg,
    ${(props) => props.theme.green} 0%,
    ${(props) => props.theme.bg1} 10%,
    ${(props) => props.theme.bg} 90%,
    ${(props) => props.theme.gray} 100%
  );

  .icon-list {
    display: flex;
    gap: 0.2rem;
  }

  .fa {
    font-size: 1.75rem;
    border-radius: 50%;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;
    color: ${({ theme }) => theme.gray};
  }

  .twitter {
    &:hover {
      color: #1da1f2;
      transform: scale(1.05);
    }
  }
  .linkedin {
    &:hover {
      color: #0a66c2;
      transform: scale(1.05);
    }
  }
  .github {
    &:hover {
      color: #171515;
      transform: scale(1.05);
    }
  }
  .angellist {
    &:hover {
      color: #000;
      transform: scale(1.05);
    }
  }
`;

export default StyledFooter;

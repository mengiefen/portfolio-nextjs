import styled from "styled-components";
import { motion } from "framer-motion";

const StyledFooter = styled(motion.footer)`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-top: 0.5px solid ${(props) => props.theme.tertiary};

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

    &:hover {
      transform: scale(1.05);
      color: ${({ theme }) => theme.primary};
    }
  }
  /* .facebook {
    color: #1877f2;
  }

  .twitter {
    color: #1da1f2;
  }
  .linkedin {
    color: #0a66c2;
  }
  .github {
    color: #171515;
  }
  .angellist {
    color: #000;
  }
  .medium {
    color: #000;
  } */
`;

export default StyledFooter;

import styled from 'styled-components';
import { useState } from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaAngellist,
  FaMedium,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <Container>
      <div className="icon-list">
        <FaFacebookSquare className="fa facebook" />
        <FaTwitterSquare className="fa twitter" />
        <FaLinkedin className="fa linkedin" />
        <FaGithubSquare className="fa github" />
        <FaAngellist className="fa angellist" />
        <FaMedium className="fa medium" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  min-height: 10rem;
  min-width: 2rem;

  transition: all 1s ease-in-out;
  background-color: ${({ theme }) => theme.bg};
  padding: 0.5rem 0;
  border-radius: 5px;

  .icon-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .fa {
    font-size: 1.75rem;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};

    &:hover {
      transform: scale(1.05);
      color:  ${({ theme }) => theme.primary};
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

export default SocialMedia;

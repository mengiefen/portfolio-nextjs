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
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <Container>
      <div className="icon-list ">
        <Link href="https://twitter.com/MengistuFentaw">
          <a target="_blank">
            <FaTwitterSquare className="fa twitter" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/mengstufentaw/">
          <a target="_blank">
            <FaLinkedin className="fa linkedin" />{' '}
          </a>
        </Link>
        <Link href="https://github.com/mengiefen">
          <a target="_blank">
            <FaGithubSquare className="fa github" />
          </a>
        </Link>
        <Link href="https://angel.co/u/mengefen">
          <a target="_blank">
            <FaAngellist className="fa angellist" />
          </a>
        </Link>
        {/* <Link href=''><a target="_blank"><FaMedium className="fa medium" /></a></Link> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(-50%);
  border-right: 0;
  min-height: 10rem;
  min-width: 2rem;
  transition: all 1s ease-in-out;
  /* background-color: ${({ theme }) => theme.bg}; */
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
    color: ${({ theme }) => theme.gray};
  }

  .facebook {
    &:hover {
      color: #1877f2;
      transform: scale(1.05);
    }
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
  .medium {
    &:hover {
      color: #000;
      transform: scale(1.05);
    }
  }
`;

export default SocialMedia;

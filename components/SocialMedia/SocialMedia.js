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
import react from 'react';

const SocialMedia = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      {hover && (
        <div className="icon-list">
          <FaFacebookSquare className="fa facebook" />
          <FaTwitterSquare className="fa twitter" />
          <FaLinkedin className="fa linkedin" />
          <FaGithubSquare className="fa github" />
          <FaAngellist className="fa angellist" />
          <FaMedium className="fa medium" />
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: -2px;
  min-height: 10rem;
  min-width: 2rem;
  transition: all 1s ease-in-out;

  .icon-list {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .fa {
    font-size: 1.75rem;
    transition: transform 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
  .facebook {
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
  }
`;

export default SocialMedia;

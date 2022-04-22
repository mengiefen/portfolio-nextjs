import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  .icon-list {
    display: flex;
    gap: 0.2rem;
  }

  .fa {
    font-size: 1.75rem;
    border-radius: 50%;
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

export default StyledFooter;

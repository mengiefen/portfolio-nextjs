import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.primary};
  background-color: ${({ theme }) => theme.bg};

  h2 {
    text-transform: uppercase;
    font-size: 1.75rem;
    font-weight: 700;
    align-self: flex-start;
    margin-left: 6%;
    padding-bottom: 0.5rem;
  }

  .border-bottom {
    width: 40%;
    padding-top: 1rem;
    border-bottom: 4px solid ${({ theme }) => theme.tertiary};
    margin-left: auto;
  }

  .left-btn {
    position: absolute;
    top: 50%;
    left: 0;
  }

  .right-btn {
    position: absolute;
    top: 50%;
    right: 0;
  }
`;

export default Container;

import styled from "styled-components";

const Container = styled.section`
  padding-top: 20%;
  width: 90%;
  height: 100%;
  padding: 5%;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-container {
    width: 100%;
    position: relative;
  }

  .button-left {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: -2.5%;
    border-radius: 50%;
    border: none;
    padding: 0.5rem 0.6rem;
    background-color: ${({ theme }) => theme.secondary};
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-right {
    position: absolute;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
    top: 50%;
    right: -2.5%;
    border-radius: 50%;
    padding: 0.5rem 0.6rem;
    background-color: ${({ theme }) => theme.secondary};
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Container;

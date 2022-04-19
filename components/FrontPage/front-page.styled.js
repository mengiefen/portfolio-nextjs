import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  background-color: ${(props) => props.theme.bg};

  .text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 70%;
    padding: 0 3%;
  }

  .heading {
    color: ${(props) => props.theme.primary};
    font-size: min(7vw, 3rem);
    text-transform: uppercase;
    line-height: 0;
    letter-spacing: 3px;
    font-weight: bold;
  }

  .sub-heading {
    font-size: min(5vw, 1.5rem);
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
  }

  .paragraph {
    font-weight: 400;
    line-height: 1.5;
    color: ${(props) => props.theme.primary};
  }

  figure {
    max-width: 40%;
    height: 93vh;
    position: relative;
    display: flex;
    align-items: flex-end;
  }
  .img {
    clip-path: polygon(50% 100%, 100% 38%, 75% 0, 25% 0, 0% 38%);
  }

  .overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bg};
    opacity: 0.9;
    z-index: 10;
  }
`;

export default Container;

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
    font-size: min(5vw, 1.5rem);
    text-transform: uppercase;
    line-height: 0;
    letter-spacing: 4px;
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
  }

  .sub-heading {
    font-size: min(5vw, 3.5rem);
    letter-spacing: 2px;
    text-align: center;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
  }

  .paragraph {
    font-weight: 400;
    line-height: 1.5;
    color: ${(props) => props.theme.primary};
  }

  figure {
    max-width: 40%;
    height:93vh;
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
    opacity: ${(props) => (props.theme.bg === '#fafafa' ? 0.4 : 0.9)};
    z-index: 10;
  }
`;

export default Container;

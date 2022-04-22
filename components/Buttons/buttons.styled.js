import styled from 'styled-components';

const Btn = styled.button`
  background-color:  ${(props) => props.theme.tertiary};
  border: 2px solid ${(props) => props.theme.secondary};
  color:${(props) => props.theme.gray};
  min-width: 150px;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-out;

  .slide {
    width: 100%;
    height: 100%;
    left: -200px;
    bottom: 0;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.tertiary};
    position: absolute;
    transition: all 0.35s ease-Out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .slide {
    left: 0;
    color: ${(props) => props.theme.tertiary};
  }

  &:active {
    border: 2px solid ${(props) => props.theme.tertiary};
  }

  .underline {
    width: 100%;
    height: 2.5px;
    margin-top: 15px;
    align-self: flex-end;
    left: -200px;
    background: ${(props) => props.theme.gray};
    position: absolute;
    transition: all 0.3s ease-Out;
    bottom: 0;
  }

  &:hover .underline {
    border: 1px solid  ${(props) => props.theme.secondary};
    left: 0;
    background-color: ${(props) => props.theme.secondary};
  }
`;

export default Btn;

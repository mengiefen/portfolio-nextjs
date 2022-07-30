import styled from 'styled-components';

const Btn = styled.a`
  background-color: ${(props) => props.theme.tertiary};
  border: 2px solid ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.primary};
  min-width: 150px;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.65rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-out;
  text-decoration: none;
  text-align: center;

  .btn-icon {
    padding-left: 0.5rem;
    font-size: 1.5rem;
  }

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
    height: 1px;
    margin-top: 15px;
    align-self: flex-end;
    left: -200px;
    background: ${(props) => props.theme.gray};
    position: absolute;
    transition: all 0.3s ease-Out;
    bottom: 0;
  }

  &:hover .underline {
    border: 1px solid ${(props) => props.theme.secondary};
    left: 0;
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const ButtonOutline = styled.a`
  border: 2px solid ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.tertiary};
  background-color: ${(props) => props.theme.bg};
  min-width: 150px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2.5px;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
    color: ${({ theme }) => theme.primary};
  }
`;

export default Btn;

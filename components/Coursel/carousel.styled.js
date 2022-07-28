import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
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

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.75rem;
    z-index: 111;
    border: none;
    background-color: #ed254eff;
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
  }

  .arrow-left {
    left: 2rem;
  }

  .arrow-right {
    right: 2rem;
  }
`;

export default Container;

import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;

  .skill-list {
    width: 70%;
    height: 70%;
    background-color: ${({ theme }) => theme.primary};
    color: ${(props) => props.theme.bg};
    border-radius: 1rem;
    position: relative;

    .skill-title {
      width: 40%;
      height: 15%;
      background-color: ${(props) => props.theme.tertiary};
      color: ${(props) => props.theme.bg};
      position: absolute;
      top: -5%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      text-align: center;
      padding: 1rem 3rem;
      border-radius: 10px;
      box-shadow: 2px 2px 10px ${(props) => props.theme.bg},
        2px 2px 10px ${(props) => props.theme.bg};
    }
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
    width: 100%;
  }
`;

export default Container;

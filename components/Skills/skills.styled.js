import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;

  .skill-list {
    padding: 5% 2%;
    width: 70%;
    height: 70%;
    background-color: ${({ theme }) => theme.bg};
    color: ${(props) => props.theme.bg};
    border-radius: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0 4px 16px 0 ${(props) => props.theme.gray}; 

    .skill-title {
      width: 40%;
      height: 12%;
      background-color: ${(props) => props.theme.gray};
      color: ${(props) => props.theme.bg};
      position: absolute;
      top: -5%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 3rem;
      border-radius: 40px;
      box-shadow: 0 4px 8px 0 ${(props) => props.theme.gray}; 
    }
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .icon-holder {
    border-radius: 30%;
    padding: 0.75rem;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: 0 2px 8px 0 ${(props) => props.theme.gray};  

    :hover {
      transform: scale(1.05);
      box-shadow: 0 4px 16px 0 ${(props) => props.theme.gray};  
    }
  }
`;

export default Container;

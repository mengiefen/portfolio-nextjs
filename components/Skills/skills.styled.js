import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.primary};
`;

export default Container;

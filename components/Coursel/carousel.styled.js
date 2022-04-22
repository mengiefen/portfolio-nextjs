import styled from 'styled-components';

const Container = styled.section`
  margin: auto;
  text-align: right;
  width: 90%;
  height: 100%;
  padding: 5%;
  background-color: ${({ theme }) => theme.primary};
`;

export default Container;

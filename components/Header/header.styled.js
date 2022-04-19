import styled from 'styled-components';

const Header = styled.header`
  height: 7vh;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
 

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 5%;
  }

  .menu-icon {
    color: ${(props) => props.theme.primary};
    font-size: 2rem;
  }
`;

export default Header;

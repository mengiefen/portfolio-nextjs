import styled from 'styled-components';

const Header = styled.header`
  height: min(10rem, 10vh);
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 0.5px solid ${(props) => props.theme.secondary};
  display: flex;
 flex-direction: column;
 justify-content: center;
 

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
  }

  .menu-icon {
    color: ${(props) => props.theme.primary};
    font-size: 2rem;
  }
`;

export default Header;
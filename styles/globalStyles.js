import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box; 
  display:block;
  margin: 0 auto;
  padding: 0;
}

body{
  height:100vh;
  width: 100vw;  
  margin: 0 auto;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Montserrat', sans-serif;
  position: relative;
}

.theme-switcher {  
    position: absolute;  
    top: 50%;
    right: 0;
    display: flex;
    justify-content: flex-end;
    border-radius: 50% ; 
    border: none;    
    padding: 0.1rem;
    background-color: transparent;    
    border: 2px solid transparent;  
    transition: all 0.3s ease-out;
  }

  .theme-switcher:hover {
    border: 2px solid cyan;
  }

.light-icon
  {
    color: #F5F4F0;
    font-size: 2rem;
  }  

  .dark-icon {
      color: #2d3142;
      font-size: 2rem;
    }  
`;

export const darkTheme = {
  primary: '#fafafa',
  secondary: '#00a6a7',
  tertiary: '#bfc0c0',
  bg: '#2d3142',
};

export const lightTheme = {
  primary: '#2d3142',
  secondary: '#006d65',
  tertiary: '#bfc0c0',
  bg: '#fafafa',
};

export default GlobalStyle;

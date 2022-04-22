import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box; 
  display:block;
  margin: 0 auto;
  padding: 0;
  background-color: #afafaf;
  scroll-behavior: smooth;
}

body{
  height:96vh;
  width: 94vw;  
  margin: 0 auto;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Montserrat', sans-serif;
  position: relative;
}

.theme-switcher {  
    position: fixed;  
    top: 50%;
    right: 2.5vw;
    display: flex;
    justify-content: flex-end;
    border-radius: 50% ; 
    border: none;    
    padding: 0.1rem;
    background-color: transparent;    
    border: 2px solid transparent;  
    transition: all 0.3s ease-out;
    z-index: 1111;
    cursor: pointer;
  }

  .theme-switcher:hover {
    border: 2px solid cyan;
  }

.light-icon
  {
    color: #777;
    font-size: 2rem;
  }  

  .dark-icon {
      color: #777;
      font-size: 2rem;
    }  
`;

export const darkTheme = {
  primary: '#dedede',
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

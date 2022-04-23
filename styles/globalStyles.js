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
    right: 0;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;      
    transition: all 0.3s ease-out;

    cursor: pointer;
  }

 
.light-icon
  {
    color: #fafafa;
    font-size: 2rem;
  }  

  .dark-icon {
      color: #fafafa;
      font-size: 2rem;
    }  

.switch {
  width: 60px;
  height: 30px;
  background-color: #2d3142;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer; 
}

.switch[data-isOn="true"] {
  justify-content: flex-end;
}

.handle {
  width: 40px;
  height: 40px;
  background-color:rgba(255, 255, 255, 0.4);;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

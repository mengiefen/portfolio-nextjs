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

.scroll-to-home {
  position: fixed;
  cursor: pointer;
  bottom: 1rem;
  right: 3%;
  border-radius: 50%;
  padding: 0.75rem;
  z-index: 11111;
  border: none;
  background-color:#ED254EFF;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
}

.theme-switcher {  
    position: fixed;  
    top: 50%;
    right: -7.5px;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;      
    transition: all 0.3s ease-out;
    cursor: pointer;
    z-index: 11111;
  }

 
.light-icon
  {
    color: #fafafa;
    font-size: 1.5rem;
  }  

  .dark-icon {
      color: #fafafa;
      font-size: 1.5rem;
  }  

.switch {
  width: 45px;
  height: 15px;
  background-color: #2d3142;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer; 
  border: 2px solid #fafafa;
  z-index: 22222;
}

.switch[data-ison="true"] {
  justify-content: flex-end;
}

.handle {
  width: 30px;
  height: 30px;
  background-color:rgba(255, 255, 255, 0.4);;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

// export const darkTheme = {
//   primary: "#dedede",
//   secondary: "#00a6a7",
//   tertiary: "#bfc0c0",
//   bg: "#2d3142",
// };

export const darkTheme = {
  primary: '#F4FFFDFF',
  secondary: '#F9DC5CFF',
  tertiary: '#ED254EFF',
  bg: '#011936FF',
  gray: '#777',
  green: '#1FB57B',
  yellow: '#FAD9A1',
  red: '#F37878',

  device: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
};

//

// export const darkTheme = {
//   primary: "#F7F4E9",
//   secondary: "#3CBCC3",
//   tertiary: "#bfc0c0",
//   bg: "#1D1D2C",
// };

// export const darkTheme = {
//   primary: "#DEB992",
//   secondary: "#1BA098",
//   tertiary: "#bfc0c0",
//   bg: "#051622",
// };

export const lightTheme = {
  primary: '#2d3142',
  secondary: '#F36B6B',
  tertiary: '#5DAE8B',
  bg: '#fafafa',
  gray: '#bfc0c0',
  green: '#1FB57B',
  yellow: '#FAD9A1',
  red: '#F37878',

  device: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
};

export default GlobalStyle;

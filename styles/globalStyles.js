import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root { 
  --dark-primary: #F4FFFDFF;
  --dark-secondary: #F9DC5CFF;
  --dark-tertiary: #ED254EFF;
  --dark-bg: #001220;
  --dark-bg1: #001220;
  --dark-gray: #777;
  --green: #1FB57B;
  --yellow: #FAD9A1;
  --red: #F37878;
  --light-primary: #2d3142;
  --light-secondary: #F36B6B;
  --light-tertiary: #5DAE8B;
  --ligh-bg: #fafafa;
  --light-bg1: #F0F0F0;
  --light-gray: #b0b0b0;
}

html{
  box-sizing: border-box; 
  display:block;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth; ;
}

body{
  font-family: 'Bebas Neue', cursive;
  font-family: 'Edu TAS Beginner', cursive;
  font-family: 'Pacifico', cursive;
  font-family: 'Open Sans', sans-serif;

  position: relative;  
  width: 100vw;
  margin: 0;
  overflow-x: hidden; 
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
  background-color:var(--dark-tertiary);
  color:var(--dark-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 0 10px 2px var(--dark-tertiary);

  :hover {
    transform: scale(1.05);
  }   
}

.theme-switcher {  
    position: absolute;  
    top: min(5rem, 5vh);
    right: 10rem;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;      
    transition: all 0.3s ease-out;
    cursor: pointer;
    z-index: 11111;
    outline: none;
    border: none;
    transform: translateY(-50%);

    @media (max-width:768px) { 
      position: absolute;
      top: 6rem;
      right: 0.5rem;
     
    } 
  }

.light-icon
  {
    color:var(--dark-primary);
    font-size: 1rem;

    @media (max-width:768px) {    
      font-size: 0.8rem;
    } 
  }  

  .dark-icon {
      color:var(--dark-primary);
      font-size: 1rem;
    @media (max-width:768px) {    
      font-size: 0.8rem;
    } 
  }  

.switch {
  width: 35px;
  height: 10px;
  background-color: #2d3142;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  padding: 5px;
  cursor: pointer; 
  border: 2px solid var(--green);
  z-index: 22222;

  @media (max-width:768px) {    
      width: 30px;
      height: 10px;
      padding: 5px;
    } 
}

.switch[data-ison="true"] {
  justify-content: flex-end;
}

.handle {
  width: 20px;
  height: 20px;
  background-color:rgba(255, 255, 255, 0.4);;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width:768px) {    
    width: 20px;
    height: 20px;
  } 
}
`;

export const darkTheme = {
  primary: '#F4FFFDFF',
  secondary: '#F9DC5CFF',
  tertiary: '#ED254EFF',
  bg: '#001220',
  bg1: '#001220',
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

export const lightTheme = {
  primary: '#2d3142',
  secondary: '#F36B6B',
  tertiary: '#5DAE8B',
  bg: '#fafafa',
  bg1: '#F0F0F0',
  gray: '#b0b0b0',
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

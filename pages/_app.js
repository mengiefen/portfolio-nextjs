import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { lightTheme, darkTheme } from '../styles/globalStyles';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
  };


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <button type="button" onClick={toggleTheme} className="theme-switcher">
          {dark ? (
            <MdOutlineLightMode className="light-icon" />
          ) : (
            <MdOutlineDarkMode className="dark-icon" />
          )}
        </button>
        {/* This is to prevent flickering effect while components are mounted */}
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;

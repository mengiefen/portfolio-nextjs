import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { lightTheme, darkTheme } from "../styles/globalStyles";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
  };

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <button type="button" onClick={toggleTheme} className="theme-switcher">
          {dark ? (
            <div className="switch" data-isOn={dark} onClick={toggleTheme}>
              <motion.div className="handle" layout transition={spring}>
                <MdOutlineLightMode className="light-icon" />
              </motion.div>
            </div>
          ) : (
            <div className="switch" data-isOn={dark} onClick={toggleTheme}>
              <motion.div className="handle" layout transition={spring}>
                <MdOutlineDarkMode className="dark-icon" />
              </motion.div>
            </div>
          )}
        </button>
        {showButton && (
          <button type="button" className="scroll-to-home" onClick={goToTop}>
            <FaAngleUp />
          </button>
        )}

        {/* This is to prevent flickering effect while components are mounted */}
        {isMounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default MyApp;

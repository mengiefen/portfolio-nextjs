import StyledFooter from '../Footer/footer.styled';
import Navbar from '../Header/header';
import SideNav from '../SideNav/SideNav';
import FrontPage  from '../FrontPage/front-page';
import About  from '../About/about';
import Skills  from '../Skills/skills';
import Portfolio  from '../Portfolio/portfolio';
import Contact  from '../Contact/contact';
import Footer  from '../Footer/footer';

const Layout = ({  }) => {
  return (
    <>
      <Navbar />
      <FrontPage />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />    
    </>
  );
};

export default Layout;

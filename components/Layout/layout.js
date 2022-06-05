import StyledFooter from '../Footer/footer.styled';
import Navbar from '../Header/header';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section>{children}</section>  
    </>
  );
};

export default Layout;

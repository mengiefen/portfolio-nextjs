import StyledFooter from '../Footer/footer.styled';
import Navbar from '../Header/header';
import SideNav from '../SideNav/SideNav';

const Layout = ({ children }) => {
  return (
    <>
      {/* <SideNav /> */}
      <Navbar />
      <section>{children}</section>
    </>
  );
};

export default Layout;

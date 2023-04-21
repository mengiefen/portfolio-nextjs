import StyledFooter from "./footer.styled";
import NavLink from "../Navbar/NavLink";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaAngellist,
  FaMedium,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="icon-list">
        <NavLink href="https://www.facebook.com/mengistu.fentaw" target="_blank">
          <FaFacebookSquare className="fa facebook" />
        </NavLink>
        <NavLink href="https://twitter.com/MengistuFentaw" target="_blank">
          <FaTwitterSquare className="fa twitter" />
        </NavLink>

        <NavLink href="https://www.linkedin.com/in/mengstufentaw/" target="_blank">
          <FaLinkedin className="fa linkedin" />
        </NavLink>
        <NavLink href="https://github.com/mengiefen" _target="blank">
          <FaGithubSquare className="fa github" />
        </NavLink>
        <NavLink href="https://angel.co/u/mengefen" _target="blank">
          <FaAngellist className="fa angellist" />
        </NavLink>
        {/* <NavLink href=''><FaMedium className="fa medium" /></NavLink> */}
      </div>
      <p>&#169;Copyright, 2022</p>
    </StyledFooter>
  );
};

export default Footer;

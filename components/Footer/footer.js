import StyledFooter from "./footer.styled";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaAngellist,
  FaMedium,
} from "react-icons/fa";
import NavLink from "../Navbar/NavLink";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="icon-list">
        <NavLink href="https://twitter.com/MengistuFentaw" target="_blank">
          <FaTwitterSquare className="fa twitter" />
        </NavLink>
        <NavLink href="https://www.linkedin.com/in/mengstufentaw/" target="_blank">
          <FaLinkedin className="fa linkedin" />{" "}
        </NavLink>
        <NavLink href="https://github.com/mengiefen" target="_blank">
          <FaGithubSquare className="fa github" />
        </NavLink>
        <NavLink href="https://angel.co/u/mengefen" target="_blank">
          <FaAngellist className="fa angellist" />
        </NavLink>
        {/* <Link href=''><a target="_blank"><FaMedium className="fa medium" /></a></Link> */}
      </div>
      <p>&#169;Copyright, 2022</p>
    </StyledFooter>
  );
};

export default Footer;

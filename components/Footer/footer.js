import StyledFooter from './footer.styled';

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaAngellist,
  FaMedium,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <StyledFooter>
      <div className="icon-list">
          <FaFacebookSquare className="fa facebook" />
          <FaTwitterSquare className="fa twitter" />
          <FaLinkedin className="fa linkedin" />
          <FaGithubSquare className="fa github" />
          <FaAngellist className="fa angellist" />
          <FaMedium className="fa medium" />
        </div>
      <p>&#169;Copyright,  2022</p>
    </StyledFooter>
  );
};

export default Footer;





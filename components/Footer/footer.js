import StyledFooter from './footer.styled';

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaAngellist,
  FaMedium,
} from 'react-icons/fa';
import Link from 'next/link';


const Footer = () => {
  return (
    <StyledFooter>
      <div className="icon-list">
        <Link href="https://twitter.com/MengistuFentaw">
          <a target="_blank"><FaTwitterSquare className="fa twitter" /></a> 
        </Link>
        <Link href="https://www.linkedin.com/in/mengstufentaw/"><a target="_blank"><FaLinkedin className="fa linkedin" /> </a></Link>
        <Link href="https://github.com/mengiefen"><a target="_blank"><FaGithubSquare className="fa github" /></a></Link>
        <Link href="https://angel.co/u/mengefen"><a target="_blank"><FaAngellist className="fa angellist" /></a></Link>
        {/* <Link href=''><a target="_blank"><FaMedium className="fa medium" /></a></Link> */}
        </div>
      <p>&#169;Copyright,  2022</p>
    </StyledFooter>
  );
};

export default Footer;





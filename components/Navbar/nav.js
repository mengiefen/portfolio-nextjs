import Link from 'next/link';
import Nav from './nav.styled';

const NavBar = ({ handleClick }) => {
  const lists = ['HOME', 'ABOUT', 'SKILLS', 'PORTFOLIO', 'CONTACT'];
  return (
    <Nav>
      <ul className="menu-list">
        {lists.map((list) => (
          <li className="menu-item" key={list} onClick={handleClick}>
            <Link href={`#${list}`.toLowerCase()}>
              <a>{list}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;
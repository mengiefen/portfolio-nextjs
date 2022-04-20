import Nav from './nav.styled';

const NavBar = ({ handleClick }) => {
  const lists = ['HOME', 'PORTFOLIO', 'CONTACT', 'ABOUT'];
  return (
    <Nav>
      <ul className="menu-list">
        {lists.map((list) => (
          <li className="menu-item" key={list} onClick={handleClick}>
            <a href={`#${list}`}>{list}</a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;

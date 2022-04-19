import Nav from './nav.styled';

const NavBar = () => {
  const lists = ['HOME', 'PORTFOLIO', 'CONTACT', 'ABOUT'];
  return (
    <Nav>
      <ul className="menu-list">
        {lists.map((list) => (
          <li className="menu-item" key={list}>
            <a href={`#${list}`}>{list}</a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;

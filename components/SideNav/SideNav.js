import React from 'react';
import { navItems } from './navData';
import Link from 'next/link';
import Nav from './SideNav.styled';

const SideNav = () => (
  <Nav>
    <ul className="nav-items">
      {navItems.map((item) => (
        <li key={item.id} className="nav-item">
          <Link href={`${item.link}`} className="nav-link">
            <a>{item.title.toUpperCase()}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Nav>
);
export default SideNav;

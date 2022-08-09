import React from 'react';
import { navItems } from './navData';
import Link from 'next/link';
import Nav from './SideNav.styled';
import { motion } from 'framer-motion';

const SideNav = () => (
  <Nav>
    <ul className="nav-items">
      {navItems.map((item) => (
        <li key={item.id} className="nav-item">
          <Link href={`${item.link}`} className="nav-link">
            <a>
              <span className="icon">{item.icon} </span>
              <span className="text">{item.title.toUpperCase()}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </Nav>
);
export default SideNav;

import NavLink from "./NavLink";
import Nav from "./nav.styled";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "100vh" },
};

const NavBar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lists = [
    { id: 2, link: "ABOUT" },
    { id: 3, link: "SKILLS" },
    { id: 4, link: "PROJECTS" },
    { id: 5, link: "CONTACT" },
  ];

  document.addEventListener("scroll", handleClick);

  return (
    <Nav
      initial={"closed"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      animate={"open"}
      variants={variants}
      onScroll={handleClick}
    >
      <ul className="menu-list">
        {lists.map((list) => (
          <motion.li
            className="menu-item"
            key={list.id}
            whileHover={{ x: 5, scale: 1.05 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            onClick={handleClick}
          >
            <NavLink href={`#${list.link}`.toLowerCase()}>{list.link}</NavLink>
          </motion.li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;

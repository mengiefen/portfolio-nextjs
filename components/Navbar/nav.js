import Link from "next/link";
import Nav from "./nav.styled";
import { motion } from "framer-motion";

const NavBar = ({ handleClick }) => {
  const lists = [
    { id: 1, link: "HOME" },
    { id: 2, link: "ABOUT" },
    { id: 3, link: "SKILLS" },
    { id: 4, link: "PORTFOLIO" },
    { id: 5, link: "CONTACT" },
  ];

  document.addEventListener("scroll", handleClick);

  return (
    <Nav
      initial={{ height: 0 }}
      animate={{ height: "90vh" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
            <Link href={`#${list.link}`.toLowerCase()}>
              <a>{list.link}</a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </Nav>
  );
};

export default NavBar;

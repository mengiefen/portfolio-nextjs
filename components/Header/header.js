import { useState } from "react";
import styled from "styled-components";
import NavLink from "../Navbar/NavLink";
import Image from "next/image";
import logo from "../../public/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import Header from "./header.styled";
import NavBar from "../Navbar/nav";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header>
      {menuOpen && <NavBar handleClick={handleOpenMenu} />}
      <div className="header">
        <NavLink href="/">
          <Image width={50} height={25} alt="logo" src={logo} />
        </NavLink>
        <Button type="button" onClick={handleOpenMenu}>
          {menuOpen ? <HiX className="menu-icon" /> : <HiMenu className="menu-icon" />}
        </Button>
      </div>
    </Header>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export default Navbar;

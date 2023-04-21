import Link from "next/link";

const NavLink = ({ href, children, target }) => {
  return (
    <Link href={href} target={target} passHref>
      {children}
    </Link>
  );
};

export default NavLink;

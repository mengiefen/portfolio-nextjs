import { AiOutlineHome } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { BsUiChecks } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { BsPersonLinesFill } from 'react-icons/bs';

export const navItems = [
  {
    id: 1,
    title: 'Home',
    link: '/home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    icon: <BsPersonLinesFill />,
  },
  {
    id: 3,
    title: 'Skills',
    link: '/skills',
    icon: <GiSkills />,
  },
  {
    id: 4,
    title: 'Projects',
    link: '/projects',
    icon: <BsUiChecks />,
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    icon: <FaRegAddressBook />,
  },
];

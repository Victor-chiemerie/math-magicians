import { NavLink } from 'react-router-dom';
import styles from '../styles/navBar.module.scss';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const NavBar = () => (
  <div className={styles.navBar}>
    <h1>Math Magicians</h1>
    <menu>
      {links.map((link) => (
        <NavLink
          key={link.text}
          to={link.path}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'rgb(53, 148, 207)',
          })}
        >
          {link.text}
        </NavLink>
      ))}
    </menu>
  </div>
);

export default NavBar;

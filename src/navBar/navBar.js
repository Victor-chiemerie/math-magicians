import styles from '../styles/navBar.module.scss';

const NavBar = () => (
  <div className={styles.navBar}>
    <h1>Math Magicians</h1>
    <menu>
      <span>Home</span>
      <span>Calculator</span>
      <span>Quote</span>
    </menu>
  </div>
);

export default NavBar;

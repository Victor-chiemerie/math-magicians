import styles from '../styles/notMatch.module.scss';

const NotMatch = () => (
  <div className={styles.error}>
    <h1>404</h1>
    <p>Page not found!</p>
  </div>
);

export default NotMatch;

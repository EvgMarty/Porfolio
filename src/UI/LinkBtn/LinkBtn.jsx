import styles from './LinkBtn.module.scss';
import { Link } from 'react-router-dom';
const LinkBtn = ({ children, to }) => {
  return (
    <Link to={to} className={styles.linkBtn} target="_blank">
      {children}
    </Link>
  );
};

export default LinkBtn;

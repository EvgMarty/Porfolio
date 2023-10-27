import styles from './Navigation.module.scss';
import { AiFillGithub } from 'react-icons/ai';

const Navigation = ({ open }) => {
  return (
    <ul className={`${open ? styles.navList_mobile : styles.navList}`}>
      <li className={`${open ? styles.listItem_mobile : styles.listItem}`}>
        <a href="#">About</a>
      </li>
      <li className={`${open ? styles.listItem_mobile : styles.listItem}`}>
        <a href="#">Work</a>
      </li>
      <li className={`${open ? styles.listItem_mobile : styles.listItem}`}>
        <a href="#">Skills</a>
      </li>
      <li className={`${open ? styles.listItem_mobile : styles.listItem}`}>
        <AiFillGithub />
        <a href="#">GitHub</a>
      </li>
    </ul>
  );
};

export default Navigation;

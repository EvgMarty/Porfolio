import styles from './Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

const Navigation = ({ open }) => {
  return (
    <ul className={`${open ? styles.navList_mobile : styles.navList}`}>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${open ? styles.listItem_mobile : styles.listItem}  ${
              isActive
                ? open
                  ? styles.listItem_mobile_active
                  : styles.listItem_active
                : ''
            }`
          }
          to="/"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${open ? styles.listItem_mobile : styles.listItem}  ${
              isActive
                ? open
                  ? styles.listItem_mobile_active
                  : styles.listItem_active
                : ''
            }`
          }
          to="works"
        >
          Works
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${open ? styles.listItem_mobile : styles.listItem}  ${
              isActive
                ? open
                  ? styles.listItem_mobile_active
                  : styles.listItem_active
                : ''
            }`
          }
          to="skills"
        >
          Skills
        </NavLink>
      </li>
      <li className={`${open ? styles.listItem_mobile : styles.listItem}`}>
        <AiFillGithub />
        <Link to="https://github.com/EvgMarty" target="_blank">
          GitHub
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;

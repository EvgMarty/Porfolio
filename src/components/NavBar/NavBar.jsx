import styles from './NavBar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerHeader from '../Containers/ContainerHeader/ContainerHeader';
import MenuBtn from '../MenuBtn/MenuBtn';
import Navigation from '../Navigation/Navigation';
import Theme from '../Themes/Theme';

const NavBar = () => {
  //Open menu
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <ContainerHeader>
        <div className={styles.flexWrap}>
          <Link
            to="/"
            className={styles.logoWrap}
            onClick={() => handleCloseMenu()}
          >
            <img className={styles.logo} src="/img/logo.svg" alt="Logo" />
            <p>Yevhen Martyniuk</p>
          </Link>
          <Navigation open={open} closeMenu={handleCloseMenu} />
          <div className={styles.uaWrap}>
            <Theme />
            <MenuBtn open={open} openMenu={handleOpenMenu} />
          </div>
        </div>
      </ContainerHeader>
    </nav>
  );
};

export default NavBar;

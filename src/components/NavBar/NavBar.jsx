import styles from './NavBar.module.scss';
import ContainerHeader from '../Containers/ContainerHeader/ContainerHeader';
import MenuBtn from '../MenuBtn/MenuBtn';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const NavBar = () => {
  //Open menu
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.navBar}>
      <ContainerHeader>
        <div className={styles.flexWrap}>
          <div className={styles.logoWrap}>
            <img className={styles.logo} src="./img/logo.svg" alt="Logo" />
            <p>Yevhen Martyniuk</p>
          </div>
          <Navigation open={open} />
          <MenuBtn open={open} openMenu={handleOpenMenu} />
        </div>
      </ContainerHeader>
    </nav>
  );
};

export default NavBar;

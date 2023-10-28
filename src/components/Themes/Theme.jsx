import styles from './Theme.module.scss';
import { HiMiniMoon } from 'react-icons/hi2';
import { FiSun } from 'react-icons/fi';
import { useState } from 'react';

const Theme = () => {
  const [darcMode, setDarcMode] = useState(false);

  const handleDarkMode = () => {
    !darcMode
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');

    setDarcMode(!darcMode);

    const button = document.querySelector(`.${styles.themeBtn}`);
    // Добавляем класс анимации
    button.classList.add(styles.animation);
    // Ждем завершения анимации, затем удаляем класс анимации
    button.addEventListener('animationend', () => {
      button.classList.remove(styles.animation);
    });
  };

  return (
    <div className={styles.themeBtn} onClick={handleDarkMode}>
      {darcMode ? (
        <FiSun className={styles.sun} />
      ) : (
        <HiMiniMoon className={styles.moon} />
      )}
    </div>
  );
};

export default Theme;

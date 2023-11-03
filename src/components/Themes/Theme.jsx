import styles from './Theme.module.scss';
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiMiniMoon } from 'react-icons/hi2';
import { FiSun } from 'react-icons/fi';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const controls = useAnimation();

  const handleDarkMode = async () => {
    !darkMode
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');

    setDarkMode(!darkMode);

    // Здесь мы используем controls.start для запуска анимации
    await controls.start({ y: [0, 100, -100, 0], opacity: [1, 0, 0, 1] });
  };

  return (
    <motion.div
      className={styles.themeBtn}
      onClick={handleDarkMode}
      // Используем animate для анимации элемента
      animate={controls}
      initial={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {darkMode ? (
        <FiSun className={styles.sun} />
      ) : (
        <HiMiniMoon className={styles.moon} />
      )}
    </motion.div>
  );
};

export default Theme;

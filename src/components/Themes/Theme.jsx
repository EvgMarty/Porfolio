import styles from './Theme.module.scss';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HiMiniMoon } from 'react-icons/hi2';
import { FiSun } from 'react-icons/fi';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('Theme');
    return storedTheme ? storedTheme === 'dark' : false;
  });

  const controls = useAnimation();

  // save theme
  useEffect(() => {
    localStorage.setItem('Theme', darkMode ? 'dark' : 'light');
    !darkMode
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');
  }, [darkMode]);

  const handleDarkMode = async () => {
    !darkMode
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme');

    setDarkMode(!darkMode);

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

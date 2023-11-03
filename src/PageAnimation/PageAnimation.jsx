import { motion } from 'framer-motion';

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }} // Начальное состояние
      animate={{ opacity: 1, y: 0 }} // Анимация появления
      exit={{ opacity: 0, y: -80 }} // Анимация исчезновения
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;

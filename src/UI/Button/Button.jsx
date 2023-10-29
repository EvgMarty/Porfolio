import styles from './Button.module.scss';

const Button = ({ children, title, type }) => {
  return (
    <button className={styles.button} type={type} title={title}>
      {children}
    </button>
  );
};

export default Button;

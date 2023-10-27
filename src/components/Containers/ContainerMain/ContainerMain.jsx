import styles from './ContainerMain.module.scss';

const ContainerMain = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerMain;

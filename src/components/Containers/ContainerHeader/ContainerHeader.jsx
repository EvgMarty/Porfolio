import styles from './ContainerHeader.module.scss';

const ContainerHeader = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerHeader;

import styles from './MenuBtn.module.scss';

const MenuBtn = (props) => {
  const { open, openMenu } = props;
  return (
    <div
      className={`${styles.menuBtn} ${open ? styles.menuBtn_active : ''}`}
      onClick={openMenu}
    >
      <span
        className={`${styles.burger} ${
          open ? styles.burger_active : ''
        }`}
      ></span>
    </div>
  );
};

export default MenuBtn;

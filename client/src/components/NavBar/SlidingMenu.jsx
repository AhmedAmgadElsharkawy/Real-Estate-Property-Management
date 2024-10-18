/* eslint-disable react/prop-types */
import styles from './SlidingMenu.module.css';

const SlidingMenu = ({close}) => {
  return (
    <div className={styles.sliderMenu}>
      <button className={styles.closeButton} onClick={close}>X</button>
      <ul className={styles.menuList}>
        <button className={styles.menuItem}>Home</button>
        <button className={styles.menuItem}>Properties</button>
        <button className={styles.menuItem}>Sign-in</button>
      </ul>
    </div>
  );
};

export default SlidingMenu;

import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoDev}>
        <label htmlFor="">Project Title</label>
        <img className={styles.img} src={logo} alt="" />
      </div>
      <div className={styles.labelsContainer}>
        <label className={styles.label} htmlFor="">Home</label>
        <label className={styles.label} htmlFor="">Properties</label>
        <label className={styles.label} htmlFor="">Sign in</label>
      </div>
      <button className={styles.button}>
        Add Property
      </button>
      <div className={styles.menuDev}>
        <MenuIcon fontSize="large"/>
      </div>
    </div>
  )
}

export default NavBar
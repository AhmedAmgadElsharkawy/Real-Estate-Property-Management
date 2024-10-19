/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AuthOverlay from "../AuthOverlay/AuthOverlay";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import AddProperty from "../AddProperty/AddProperty";
import SlidingMenu from "./SlidingMenu";
function NavBar() {
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showSlidingMenu, setShowSlidingMenu] = useState(false);


  const auth = useAuth();

  function openAddProperty() {
    if(auth.isAuthenticated)
        setShowAddProperty(true);
    else
        auth.openSignIn()
  }

  function closeAddProperty() {
    setShowAddProperty(false);
  }

  function openSlidingMenu(){
    setShowSlidingMenu(true);
  }

  function closeSlidingMenu() {
    setShowSlidingMenu(false);
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoDev}>
          <label htmlFor="">Project Title</label>
          <img className={styles.img} src={logo} alt="" />
        </div>
        <div className={styles.labelsContainer}>
          <Link to="/" className={styles.label}>Home</Link>
          <Link to="/properties" className={styles.label}>Properties</Link>
          {
            auth.isAuthenticated ? <Link to="/account" className={styles.label}>account</Link> :
              <label onClick={auth.openSignIn} className={styles.label}>Sign in</label>
          }
        </div>
        <button onClick={openAddProperty} className={styles.button}>
          Add Property
        </button>
        <div className={styles.menuDev}>
          <button className={styles.menuButton} onClick={openSlidingMenu}><MenuIcon fontSize="large" /></button>
        </div>
      </div>
      {showSlidingMenu && <SlidingMenu close={closeSlidingMenu}/>}
      {auth.showSignIn && <AuthOverlay type="sign-in" toggleOverflow={auth.openSignUp} closeOverlay={auth.closeOverlay} />}
      {auth.showSignUp && <AuthOverlay type="sign-up" toggleOverflow={auth.openSignIn} closeOverlay={auth.closeOverlay} />}
      {showAddProperty && <AddProperty onClose={closeAddProperty} />}
    </>
  )
}

export default NavBar

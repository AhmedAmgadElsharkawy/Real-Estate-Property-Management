/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AuthOverlay from "../AuthOverlay/AuthOverlay";
import {Link} from "react-router-dom";
import AddProperty from "../AddProperty/AddProperty";
import SlidingMenu from "./SlidingMenu";
function NavBar() {
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showSlidingMenu, setShowSlidingMenu] = useState(false);

  const [showSignIn,setShowSignIn] = useState(false);
  const [showSignUp,setShowSignUp] = useState(false);


  const openSignIn=(e)=>{
    setShowSignIn(true)
    setShowSignUp(false)
  }

  const openSignUp=(e)=>{
    setShowSignUp(true)
    setShowSignIn(false)
  }

  const closeOverlay = (e)=>{
    setShowSignIn(false)
    setShowSignUp(false)
  }

  function openAddProperty() {
    setShowAddProperty(true);
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
        <Link to = "/" className={styles.label}>Home</Link>
        <Link to = "/properties" className={styles.label}>Properties</Link>
        <label onClick = {openSignIn} className={styles.label}>Sign in</label>
      </div>
      <button onClick={openAddProperty} className={styles.button}>
        Add Property
      </button>
      <div className={styles.menuDev}>
        <button className={styles.menuButton} onClick={openSlidingMenu}><MenuIcon fontSize="large"/></button>
      </div>
    </div>
    {showSlidingMenu && <SlidingMenu close={closeSlidingMenu}/>}
    {showSignIn && <AuthOverlay type = "Sign in" toggleOverflow = {openSignUp} closeOverlay={closeOverlay}/>}
    {showSignUp && <AuthOverlay type = "Sign up" toggleOverflow = {openSignIn} closeOverlay={closeOverlay}/>}
    {showAddProperty && <AddProperty onClose={closeAddProperty} />}
    </>
  )
}

export default NavBar
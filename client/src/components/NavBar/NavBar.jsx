/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AuthOverlay from "../AuthOverlay/AuthOverlay";
import AddProperty from "../AddProperty/AddProperty";
function NavBar() {
  const [showAddProperty, setShowAddProperty] = useState(false);

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



  return (
    <>
    <div className={styles.container}>
      <div className={styles.logoDev}>
        <label htmlFor="">Project Title</label>
        <img className={styles.img} src={logo} alt="" />
      </div>
      <div className={styles.labelsContainer}>
        <label className={styles.label} htmlFor="">Home</label>
        <label className={styles.label} htmlFor="">Properties</label>
        <label onClick = {openSignIn} className={styles.label} htmlFor="">Sign in</label>
      </div>
      <button onClick={openAddProperty} className={styles.button}>
        Add Property
      </button>
      <div className={styles.menuDev}>
        <MenuIcon fontSize="large"/>
      </div>
    </div>
    {showSignIn && <AuthOverlay type = "Sign in" toggleOverflow = {openSignUp} closeOverlay={closeOverlay}/>}
    {showSignUp && <AuthOverlay type = "Sign up" toggleOverflow = {openSignIn} closeOverlay={closeOverlay}/>}
    {showAddProperty && <AddProperty onClose={closeAddProperty} />}
    </>
  )
}

export default NavBar
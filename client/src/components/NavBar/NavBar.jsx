import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AuthOverlay from "../AuthOverlay/AuthOverlay";
function NavBar() {

  const [showSignIn,setShowSignIn] = useState(false);
  const [showSignUp,setShowSignUp] = useState(false);


  const openSignIn=(e)=>{
    setShowSignIn(true)
    setShowSignUp(false)
  }

  const closeSignIn = (e)=>{
    setShowSignIn(false)
  }

  const openSignUp=(e)=>{
    setShowSignUp(true)
    setShowSignIn(false)
    console.log("adawdawdawd")
  }

  const closeSignUp = (e)=>{
    setShowSignUp(false)
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
      <button className={styles.button}>
        Add Property
      </button>
      <div className={styles.menuDev}>
        <MenuIcon fontSize="large"/>
      </div>
    </div>
    {showSignIn && <AuthOverlay type = "Sign in" onClick = {openSignUp} />}
    {showSignUp && <AuthOverlay type = "Sign up" onClick = {openSignIn} />}
    </>
  )
}

export default NavBar
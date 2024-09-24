import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./logo.jpeg";
import MenuIcon from '@mui/icons-material/Menu';
import AuthOverlay from "../AuthOverlay/AuthOverlay";
import {Link} from "react-router-dom"

function NavBar() {

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
      <button className={styles.button}>
        Add Property
      </button>
      <div className={styles.menuDev}>
        <MenuIcon fontSize="large"/>
      </div>
    </div>
    {showSignIn && <AuthOverlay type = "Sign in" toggleOverflow = {openSignUp} closeOverlay={closeOverlay}/>}
    {showSignUp && <AuthOverlay type = "Sign up" toggleOverflow = {openSignIn} closeOverlay={closeOverlay}/>}
    </>
  )
}

export default NavBar
import styles from "./AuthInputField.module.css"
import { useState } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext } from "react";
import { inputsContext } from "../AuthOverlay/AuthOverlay";

function AuthInputField({ type, placeholder, name }) {
  const [visibility,setVisibility] = useState(false);

  const {values,setValues} = useContext(inputsContext);

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name
    setValues({...values,[name]:value});
  }

  const onClick = (event)=>{
    setVisibility(!visibility)
  }

  return (
    <div className={styles.inputDiv}>
      <input
        type={type == "password" ? (visibility ? "text" : "password") : type}
        name={name}
        placeholder={placeholder}
        className={styles.inputItem}
        value={values.name}
        onChange={onChange}
      />
      {type == "password" && <button onClick = {onClick} type = "button" className={styles.eyeIcon}>{(!visibility ? <VisibilityOffIcon sx = {{fontSize:'20px'}}/> : <VisibilityIcon sx = {{fontSize:'20px'}}/>)}</button>}
      </div>
  )
}

export default AuthInputField
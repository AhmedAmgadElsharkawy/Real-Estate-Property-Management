import styles from "./AuthInputField.module.css"
import { useState } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function AuthInputField({ type, placeholder, name }) {
  const [value, setValue] = useState("");
  const [visibility,setVisibility] = useState(false);

  const onChange = (event) => {
    const v = event.target.value;
    setValue(v);
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
        value={value}
        onChange={onChange}
      />
      {type == "password" && <button onClick = {onClick} type = "button" className={styles.eyeIcon}>{(!visibility ? <VisibilityOffIcon sx = {{fontSize:'20px'}}/> : <VisibilityIcon sx = {{fontSize:'20px'}}/>)}</button>}
      </div>
  )
}

export default AuthInputField
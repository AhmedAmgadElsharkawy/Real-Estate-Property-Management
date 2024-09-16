import styles from "./CustomizedInputField.module.css"
function CustomizedInputField({type,placeholder,name}) {
  return (
    <input type={type} placeholder={placeholder} name={name} className={styles.customizedInputField}/>
  )
}

export default CustomizedInputField
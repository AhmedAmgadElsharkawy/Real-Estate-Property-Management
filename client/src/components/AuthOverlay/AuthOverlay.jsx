import styles from "./AuthOverlay.module.css"
import photo from "../../assets/signIn.png"
import AuthInputField from "../AuthInputFiled/AuthInputField"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { createContext } from "react";

export const inputsContext = createContext()

function AuthOverlay({ onSubmit, type, toggleOverflow, closeOverlay }) {


    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })

    const onClose = () => {
        setValues({
            email: "",
            password: "",
            confirmpassword: ""
        })
        closeOverlay()
    }

 

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <button onClick={onClose} type="button" className={styles.closeButton}><CloseIcon /></button>
                <img src={photo} alt="sign in photo" className={styles.Img} />
                <div className={styles.formWrapper}>
                    <form onSubmit={onSubmit} className={styles.CustomizedFormComponent}>
                        <div className={styles.header}>
                            <div className={styles.headerTopDiv}>{type} to list your properties and much more</div>
                            <div className={styles.headerBottomDiv}>
                                <div className={styles.headerBottomDivText}>{type == "Sign in" ? "No account? " : "Already registered? "}</div>
                                <button className={styles.headerBottomDivButton} type="button" onClick={toggleOverflow}>{type == "Sign up" ? "Sign in" : "Sign up"}</button>
                            </div>
                        </div>
                        <div className={styles.inputs}>
                            <inputsContext.Provider value={{ values, setValues }}>
                                <AuthInputField type="email" placeholder="Email" name="email" />
                                <AuthInputField type="password" placeholder="Password" name="password" />
                                {type == "Sign up" && <AuthInputField type="password" placeholder="Confirm Password" name="confirmPassword" />}
                            </inputsContext.Provider>
                            <div className={styles.inputsDivText}>
                                {type == "Sign in" ?
                                    (<button type="button" className={styles.forgotPasswordButton}>Forgot Password?</button>) :
                                    (<div className={styles.passwordInstructionsText}>Password must be at least 8 characters with 1 uppercase letter and 1 special character.</div>)
                                }
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button type="submit" className={styles.submitButton}>{type == "Sign in" ? "Continue" : "Sign up"}</button>
                            <div className={styles.termsText}>By signing up, you accept our <button type="button" className={styles.termsButtons}>Terms of Use</button> and <button type="button" className={styles.termsButtons}>Privacy Policy</button>.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthOverlay
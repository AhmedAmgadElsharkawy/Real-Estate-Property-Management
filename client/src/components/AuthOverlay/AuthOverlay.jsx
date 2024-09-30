import styles from "./AuthOverlay.module.css"
import photo from "../../assets/signIn.png"
import AuthInputField from "../AuthInputFiled/AuthInputField"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { createContext } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const inputsContext = createContext()

function AuthOverlay({ onSubmit, type, toggleOverflow, closeOverlay }) {

    const navigate = useNavigate();
    const auth  = useAuth();

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

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/user/sign-in",
                {
                    email: values.email,
                    password: values.password
                })
            auth.logIn(response.data.token);
            onClose();
        } catch (error) {
            console.error(error.message)
        }
    }

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/user/sign-up",values)
            alert("successfully signed-up! please sing-in")
            toggleOverflow()
        } catch (error) {
            console.error(error.message)
        }
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
                                <div className={styles.headerBottomDivText}>{type == "sign-in" ? "No account? " : "Already registered? "}</div>
                                <button className={styles.headerBottomDivButton} type="button" onClick={toggleOverflow}>{type == "sign-up" ? "Sign in" : "Sign up"}</button>
                            </div>
                        </div>
                        <div className={styles.inputs}>
                            <inputsContext.Provider value={{ values, setValues }}>
                                <AuthInputField type="email" placeholder="Email" name="email" />
                                <AuthInputField type="password" placeholder="Password" name="password" />
                                {type == "sign-up" && <AuthInputField type="password" placeholder="Confirm Password" name="confirmPassword" />}
                            </inputsContext.Provider>
                            <div className={styles.inputsDivText}>
                                {type == "sign-in" ?
                                    (<button type="button" className={styles.forgotPasswordButton}>Forgot Password?</button>) :
                                    (<div className={styles.passwordInstructionsText}>Password must be at least 8 characters with 1 uppercase letter and 1 special character.</div>)
                                }
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button type="submit" className={styles.submitButton} onClick={type == "sign-in" ? signIn : signUp}>{type == "sign-in" ? "Continue" : "Sign up"}</button>
                            <div className={styles.termsText}>By signing up, you accept our <button type="button" className={styles.termsButtons}>Terms of Use</button> and <button type="button" className={styles.termsButtons}>Privacy Policy</button>.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthOverlay
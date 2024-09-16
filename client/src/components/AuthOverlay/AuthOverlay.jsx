import styles from "./AuthOverlay.module.css"
import photo from "../../assets/signIn.png"

function AuthOverlay({ onSubmit, type, onClick }) {
    return (
        <div className={styles.container}>
            <div className={styles.imgDiv}><img src={photo} alt="sigin photo" className={styles.Img} /></div>
            <form onSubmit={onSubmit} className={styles.CustomizedFormComponent}>
                <div className={styles.header}>
                    <div className={styles.headerTopDiv}>{type} to list your properties and much more</div>
                    <div className={styles.headerBottomDiv}>
                        <div className={styles.headerBottomDivText}>{type == "Sign in" ? "No account? " : "Already registered? "}</div>
                        <button className={styles.headerBottomDivButton} type="button" onClick={onClick}></button>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputsDivText}>
                        {type == "Sign in" ?
                            (<button className={styles.forgotPasswordButton}>Forgot Password?</button>) :
                            (<div className={styles.passwordInstructionsText}>Password must be at least 8 characters with 1 uppercase letter and 1 special character.</div>)
                        }
                    </div>
                </div>
                <div className={styles.buttons}></div>
            </form>
        </div>
    )
}

export default AuthOverlay
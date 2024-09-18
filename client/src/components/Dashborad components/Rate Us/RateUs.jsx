import styles from "./RateUs.module.css";
import CloseIcon from '@mui/icons-material/Close';


function RateUs () {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.RateUsDiv}>
                <div className={styles.titleDiv}>
                    <h2>Rate Us</h2> 
                    <button className={styles.closeButton}><CloseIcon fontSize="small"/></button>
                </div>
                <input className={styles.input} type="number" placeholder="Enter your rate out of 5"/>
                <h4>Write any comments on our website</h4>
                <textarea className={styles.textArea} name="comments" id=""></textarea>
                <p>Thanks for your opinion</p>
                <div className={styles.buttonsDiv}>
                    <button className={styles.reset}>Reset</button>
                    <button className={styles.submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default RateUs;
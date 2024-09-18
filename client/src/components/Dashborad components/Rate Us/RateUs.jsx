/* eslint-disable react/prop-types */
import styles from "./RateUs.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function RateUs ({close}) {
    const [fullRate, setFullRate] = useState({
        rate: "",
        comment: ""
    })

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFullRate({...fullRate, [name]: value});
    }

    function reset() {
        setFullRate({
            rate: "",
            comment: ""
        })
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.RateUsDiv}>
                <div className={styles.titleDiv}>
                    <h2>Rate Us</h2> 
                    <button onClick={close} className={styles.closeButton}><CloseIcon fontSize="small"/></button>
                </div>
                <input onChange={handleChange} name="rate" className={styles.input} placeholder="Enter your rate out of 5" type="number" value={fullRate.rate}/>
                <h4>Write any comments on our website</h4>
                <textarea onChange={handleChange} name="comment" className={styles.textArea} placeholder="Enter your comments" value={fullRate.comment}></textarea>
                <p>Thanks for your opinion</p>
                <div className={styles.buttonsDiv}>
                    <button onClick={reset} className={styles.reset}>Reset</button>
                    <button className={styles.submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default RateUs;
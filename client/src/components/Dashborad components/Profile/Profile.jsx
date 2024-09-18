/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";

function Profile({name, email, password, phone}) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.componentDiv}>
                <h4>Name: {name}</h4>
                <div className={styles.inputDiv}>Change your Name: <input className={styles.profileInput} type="text" placeholder="Enter the new Email address"/></div>
            </div>
            <div className={styles.componentDiv}>
                <h4>Email address: {email}</h4>
                <div className={styles.inputDiv}>Change Email address: <input className={styles.profileInput} type="text" placeholder="Enter the new Email address"/></div>
            </div>
            <div className={styles.componentDiv}>
                <h4>Phone number: {phone}</h4>
                <div className={styles.inputDiv}>Change Phone number: <input className={styles.profileInput} type="number" placeholder="Enter the new Phone number"/></div>
            </div>
            <div className={styles.componentDiv}>
                <h4>Password: {password}</h4>
                <div className={styles.inputDiv}>Change Password: <input className={styles.profileInput} type="password" placeholder="Enter the new Password"/></div>
            </div>
        </div>
    )
}

export default Profile
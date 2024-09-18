/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";
import img from "./profile.jpeg"

function Profile({name, email, password, phone}) {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.titleDiv}>
                <div className={styles.titleContentDiv}>
                    <img className={styles.img} src={img} alt="" />
                    <div className={styles.namesDiv}>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </div>
                <button className={styles.imgButton}>
                    Update image
                </button>
            </div>

            <div className={styles.valuesInputs}>
                <div className={styles.inputDiv}>
                    <h3>Full Name</h3>
                    <input className={styles.input} type="text" name="fullName" id="" placeholder="Enter your name" value={name}/>
                </div>
                <div className={styles.inputDiv}>
                    <h3>Email</h3>
                    <input className={styles.input} type="text" name="email" id="" placeholder="Enter your email" value={email}/>
                </div>
                <div className={styles.inputDiv}>
                    <h3>Phone Number</h3>
                    <input className={styles.input} type="number" name="phone" id="" placeholder="Enter your phone number" value={phone}/>
                </div>
                <div className={styles.inputDiv}>
                    <h3>City</h3>
                    <input className={styles.input} type="text" name="city" id="" placeholder="Enter your city" value={phone}/>
                </div>
                <div className={styles.inputDiv}>
                    <h3>Phone </h3>
                    <input className={styles.input} type="number" name="phone" id="" placeholder="Enter your phone number" value={phone}/>
                </div>
                <div className={styles.inputDiv}>
                    <h3>Password</h3>
                    <input className={styles.input} type="text" name="fullName" id="" placeholder="Enter your password"/>
                </div>
            </div>

            <div className={styles.submitDiv}>
                <button className={styles.imgButton}>Save changes</button>
            </div>

        </div>
    )
}

export default Profile
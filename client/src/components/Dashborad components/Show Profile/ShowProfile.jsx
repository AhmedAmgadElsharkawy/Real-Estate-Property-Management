/* eslint-disable react/prop-types */

import styles from './ShowProfile.module.css';
import img from './profile.jpeg';

function ShowProfile({name, email, phone, gender, city}) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.detailsDiv}>
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
                <h3>Phone: {phone}</h3>
                <h3>Gender: {gender}</h3>
                <h3>City: {city}</h3>
            </div>
            <div className={styles.imgDiv}>
                <img className={styles.img} src={img} alt="" />
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default ShowProfile
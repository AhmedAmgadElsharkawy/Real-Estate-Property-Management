/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from './ShowProfile.module.css';
import img from './profile.jpeg';
import axios from 'axios';

function ShowProfile({name, email, phone, gender, city}) {
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phone: "",
        gender: '',
        city: "",
        imageLink: ""
    })

    useEffect(() => {
        // Fetch data from backend when the component is mounted
        async function getUserData() {
          try {
            const token = localStorage.getItem("access-token")
            const response = await axios.get("http://localhost:3000/api/user/get-user-Data", {headers: {
                "Authorization": `Bearer ${token}`
            },});
            console.log(response)
            // Set the fetched data to state
            setUserData(response.data)
            console.log(userData)
          } catch (error) {
            console.log("Error fetching properties:", error);
          }
        }
        getUserData(); // Call the function to fetch data
    }, []); // Empty array means it runs only once when the component mounts

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
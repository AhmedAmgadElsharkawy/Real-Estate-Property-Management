/* eslint-disable no-unused-vars */
import styles from './Account.module.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import img from './Dashboard Banner.png';
import Properties from '../../components/Dashborad components/Properties/Properties';
import EditProfile from '../../components/Dashborad components/Edit Profile/EditProfile';
import RateUs from '../../components/Dashborad components/Rate Us/RateUs';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Account() {
    const [minedata, setMineData] = useState([])
    const [favoriteData, setFavoriteData] = useState([])
    const [data, setData] = useState([])


    useEffect(() => {
        // Fetch data from backend when the component is mounted
        async function getData() {
          try {
            const token = localStorage.getItem("access-token")
            const response = await axios.get("http://localhost:3000/property/get-user-properties", {headers: {
                "Authorization": `Bearer ${token}`
            },});
            // Set the fetched data to state
            console.log(response)
            setMineData(response.data);
            setData(minedata)
          } catch (error) {
            console.log("Error fetching properties:", error);
          }
        }
    
        getData(); // Call the function to fetch data
    }, []); // Empty array means it runs only once when the component mounts
    return (
        <div className={styles.mainDiv}>
            <Dashboard mine={data.length} favorite={data.length}/>
            <div className={styles.rightDiv}>
                <img className={styles.accountImg} src={img} alt=""/>
                {data.length > 0 ? <Properties data={data}/> : <p>No properties available</p>}
            </div>
        </div>
    )
}

export default Account
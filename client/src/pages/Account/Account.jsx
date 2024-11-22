/* eslint-disable no-unused-vars */
import styles from './Account.module.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import img from './Dashboard Banner.png';
import Properties from '../../components/Dashborad components/Properties/Properties';
import data from '../Properties/temporaryData.json';
import EditProfile from '../../components/Dashborad components/Edit Profile/EditProfile';
import RateUs from '../../components/Dashborad components/Rate Us/RateUs';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Account() {
    const [minedata, setMineData] = useState([])
    const [favoriteData, setFavoriteData] = useState([])


    useEffect(() => {
        // Fetch data from backend when the component is mounted
        async function getData() {
          try {
            const response = await axios.get("http://localhost:3000/property/get-all-properties");
            // Set the fetched data to state
            console.log(response)
            setData(response.data);
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
                <Properties data={data}/>
            </div>
        </div>
    )
}

export default Account
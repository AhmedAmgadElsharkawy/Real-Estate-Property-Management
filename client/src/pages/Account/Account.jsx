/* eslint-disable no-unused-vars */
import styles from './Account.module.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import img from './Dashboard Banner.png';
import Properties from '../../components/Dashborad components/Properties/Properties';
import data from '../Properties/temporaryData.json';
import EditProfile from '../../components/Dashborad components/Edit Profile/EditProfile';
import RateUs from '../../components/Dashborad components/Rate Us/RateUs';

function Account() {
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
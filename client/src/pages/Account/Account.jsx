import styles from './Account.module.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import img from './Dashboard Banner.png';
import Properties from '../../components/Dashborad components/Properties/Properties';
import data from '../Properties/temporaryData.json';
import Profile from '../../components/Dashborad components/profile/Profile';

function Account() {
    return (
        <div className={styles.mainDiv}>
            <Dashboard mine={data.length} favorite={data.length}/>
            <div className={styles.rightDiv}>
                <img className={styles.accountImg} src={img} alt=""/>
                <Profile name={"Abudllah Mahmoud Hanafy"} email={"abdullah@Gmail.com"} phone={"01148770014"} gender={'M'} city={"Giza"}/>
            </div>
        </div>
    )
}

export default Account
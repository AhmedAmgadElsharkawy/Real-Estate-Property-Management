import styles from "./Dashboard.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Dashboard() {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.pagesDiv}>
                <div className={styles.titleDiv}>
                    <SpaceDashboardIcon fontSize="small"/> <h3>Dashboard</h3>
                </div>
                <button className={styles.pageComponent}><PersonIcon fontSize="small"/>My properties</button>
                <button className={styles.pageComponent}><FavoriteIcon fontSize="small"/>Saved properties</button>
                <button className={styles.pageComponent}><div className={styles.personIconDiv}><PersonIcon fontSize="small"/></div>Profile</button>
            </div>
            <div className={styles.restDiv}>
                <h5>Settings</h5>
                <div className={styles.settingDiv}>
                    <button className={styles.pageComponent}><PersonIcon fontSize="small"/>Change your password</button>
                    <button className={styles.pageComponent}><FavoriteIcon fontSize="small"/>Change your email</button>
                    <button className={styles.pageComponent}><LogoutIcon fontSize="small"/>Sign out</button>
                </div>
                <button className={styles.pageComponent}><StarHalfIcon fontSize="small"/>Rate us</button>
            </div>

            <div className={styles.deleteAccountDiv}>
                <button className={styles.specialPageComponent}><RemoveCircleIcon fontSize="small"/>Delete my account</button>
            </div>
        </div>
    )
}

export default Dashboard
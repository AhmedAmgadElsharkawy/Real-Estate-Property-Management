/* eslint-disable react/prop-types */
import styles from "./Dashboard.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';

function Dashboard({mine, favorite}) {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.pagesDiv}>
                <div className={styles.titleDiv}>
                    <SpaceDashboardIcon fontSize="small"/> <h3>Dashboard</h3>
                </div>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><PersonIcon fontSize="small"/>My properties</div> {mine}</button>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><FavoriteIcon fontSize="small"/>Saved properties</div> {favorite}</button>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><div className={styles.personIconDiv}><PersonIcon fontSize="small"/></div>Profile</div></button>
            </div>
            <div className={styles.restDiv}>
                <h5>Settings</h5>
                <div className={styles.settingDiv}>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><DriveFileRenameOutlineIcon fontSize="small"/>Change your Name</div></button>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><EmailIcon fontSize="small"/>Change Phone Number</div></button>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><PhoneAndroidIcon fontSize="small"/>Change Email address</div></button>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><LockIcon fontSize="small"/>Change your Password</div></button>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><LogoutIcon fontSize="small"/>Sign out</div></button>
                </div>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><StarHalfIcon fontSize="small"/>Rate us</div></button>
            </div>

            <div className={styles.deleteAccountDiv}>
                <button className={styles.specialPageComponent}><RemoveCircleIcon fontSize="small"/>Delete my account</button>
            </div>
        </div>
    )
}

export default Dashboard
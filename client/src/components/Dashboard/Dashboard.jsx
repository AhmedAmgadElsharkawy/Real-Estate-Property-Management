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

function Dashboard({mine, favorite, refs}) {
    function handlechange(event) {
        const value = event.target.name;
        console.log(value);
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.pagesDiv}>
                <div className={styles.titleDiv}>
                    <SpaceDashboardIcon fontSize="small"/> <h3 className={styles.delete}>Dashboard</h3>
                </div>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><PersonIcon fontSize="small"/><h3 className={styles.delete}>My properties</h3></div> {mine}</button>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><FavoriteIcon fontSize="small"/><h3 className={styles.delete}>Saved properties</h3></div> {favorite}</button>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><div className={styles.personIconDiv}><PersonIcon fontSize="small"/></div><h3 className={styles.delete}>Profile</h3></div></button>
            </div>
            <div className={styles.restDiv}>
                <h5>Settings</h5>
                <div className={styles.settingDiv}>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><DriveFileRenameOutlineIcon fontSize="small"/><h3 className={styles.delete}>Update your profile</h3></div></button>
                    <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><LogoutIcon fontSize="small"/><h3 className={styles.delete}>Sign out</h3></div></button>
                </div>
                <button className={styles.pageComponent}><div className={styles.buttonSmallerDiv}><StarHalfIcon fontSize="small"/><h3 className={styles.delete}>Rate us</h3></div></button>
            </div>

            <div className={styles.deleteAccountDiv}>
                <button className={styles.specialPageComponent}><RemoveCircleIcon fontSize="small"/><h3 className={styles.delete}>Delete my account</h3></button>
            </div>
        </div>
    )
}

export default Dashboard
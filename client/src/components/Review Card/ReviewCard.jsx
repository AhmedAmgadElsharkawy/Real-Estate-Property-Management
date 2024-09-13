import NorthEastIcon from '@mui/icons-material/NorthEast';
import styles from './reviewCard.module.css';
import userImage from './antony.webp';
import rating from './rating.png';

function ReviewCard() {
    return (
        <div className={styles.mainDev}>
            <div className={styles.clientDev}>
                <img className={styles.reviewerImg} src={userImage} alt="" />
                <div>
                    <h5>Guy Howkins</h5>
                    <h5 className={styles.reviewDate}>Jun 21, 2021</h5>
                </div>
            </div>
            <p className={styles.comment}>Our property sale was Professionally handled by Linked Bricks throughout the entire process...</p>
            <div className={styles.ratingDev}>
                <img className={styles.ratingStars} src={rating} alt="" />   
                <button className={styles.showButton}>
                    <NorthEastIcon />
                </button>
            </div>
        </div>
    )
}

export default ReviewCard;
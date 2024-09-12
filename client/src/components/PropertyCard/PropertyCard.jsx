import styles from './PropertyCard.module.css';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import WeekendIcon from '@mui/icons-material/Weekend';
function PropertyCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cardImgDiv}><img className={styles.cardImg} src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/real-estate-photography/real-estate-photography_P1_900x420.jpg.img.jpg" alt="real-state" /></div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.price}>£22,250</div>
          <div className={styles.type}>Penthouse</div>
          <div className={styles.location}>Manchester city</div>
        </div>
        <div className={styles.features}>
          <div className={styles.featureContainer}><HotelIcon/><span>3</span></div>
          <div className={styles.featureContainer}><ShowerIcon/><span>2</span></div>
          <div className={styles.featureContainer}><WeekendIcon/><span>semi-furnished</span></div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
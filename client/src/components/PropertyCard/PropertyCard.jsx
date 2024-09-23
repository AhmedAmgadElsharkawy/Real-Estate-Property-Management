/* eslint-disable react/prop-types */
import styles from './PropertyCard.module.css';
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import WeekendIcon from '@mui/icons-material/Weekend';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function PropertyCard({images,price,beds,baths,location,type,furniture,status}) {
  return (
    <div className={styles.container}>
      <div className={styles.cardImgDiv}>
        <img className={styles.cardImg} src={images[0]} alt="real-state" />
        <button className={styles.favouriteButton}><FavoriteBorderIcon/></button>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <div className={styles.priceAndStatusContainer}>
            <div className={styles.price}>{price}</div> 
            <div className={styles.status}>{status}</div>
          </div>
          <div className={styles.type}>{type}</div>
          <div className={styles.location}>{location}</div>
        </div>
        <div className={styles.features}>
          <div className={styles.featureContainer}><HotelIcon/><span>{beds}</span></div>
          <div className={styles.featureContainer}><ShowerIcon/><span>{baths}</span></div>
          <div className={styles.featureContainer}><WeekendIcon/><span>{furniture}</span></div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
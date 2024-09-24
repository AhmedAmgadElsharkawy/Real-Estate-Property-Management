import styles from "./Reviews.module.css"
import bannerImage from '../../assets/propertiesPageBanner.jpg';
import { Review } from "../../components";

function Reviews({reviews}) {
  return (
    <>
      <div className={styles.banner}>
        <img className={styles.bannerImg} src={bannerImage} alt="banner" />
        <div className={styles.bannerText}>
          <div className={styles.head}>Customer reviews</div>
          <div className={styles.description}>See what our client’s are saying</div>
        </div>
      </div>

      <div className={styles.body}>
          <div className={styles.wrapper}>
            <div className={styles.reviewsContainer}>
                  <Review/>
            </div>
          </div>
      </div>
    </>

  )
}

export default Reviews
import styles from "./PropertyDetails.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Pagination } from "../../components";
import data from "../Properties/temporaryData.json"

function PropertyDetails({property}) {
  return (
    <div className={styles.container}>

        <div className={styles.topDiv}>
            <button className={styles.BackButton}><NavigateBeforeIcon/> <span>Back to property search</span></button>
        </div>

        <div className={styles.propertyDiv}>
            <div className={styles.bigImgDiv}></div>
            <div className={styles.smallImagesDiv}></div>
            <div className={styles.contentDiv}></div>
        </div>

        <div className={styles.detailsDiv}>
            <div className={styles.descriptionDiv}>
                <div className={styles.descriptionHeader}></div>
                <div className={styles.description}></div>
            </div>

            <div className={styles.featuresDiv}>
                <div className={styles.featuresHeader}></div>
                <div className={styles.features}>
                    <div className={styles.interiorFeatures}></div>
                    <div className={styles.exteriorFeatures}></div>
                </div>
            </div>
        </div>

        <div className={styles.graphsDiv}>
            <div className={styles.floorPlanDiv}><img src="" alt="" /></div>
            <div className={styles.locationDiv}><img src="" alt="" /></div>
        </div>

        <div className={styles.similarPropertiesDiv}>
            <div className={styles.similarPropertiesHeader}></div>
            <Pagination data={data} itemsCount = {3}/>
        </div>

    </div>
  )
}

export default PropertyDetails
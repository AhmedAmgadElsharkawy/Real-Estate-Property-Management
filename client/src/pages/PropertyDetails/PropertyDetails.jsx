import styles from "./PropertyDetails.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Pagination } from "../../components";
import data from "../Properties/temporaryData.json"
import { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { dateDiff } from "../../utils";
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import WeekendIcon from '@mui/icons-material/Weekend';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function PropertyDetails({ property }) {
    const [bigImg, setBigImg] = useState(property.images[0]);
    const [selectedImg, setSelectedImg] = useState(0);

    return (
        <div className={styles.container}>

            <div className={styles.topDiv}>
                <button type = "button" className={styles.BackButton}><NavigateBeforeIcon /> <span>Back to properties</span></button>
            </div>

            <div className={styles.propertyDiv}>
                <img src={bigImg} alt="property image" className={styles.bigImg} />
                <div className={styles.smallImagesDiv}>
                    {
                        property.images.map((image, index) => {
                            return (
                                <img key={index} id={index} src={image} alt="property small img" className={styles.smallImg} />
                            )
                        })
                    }
                </div>
                <div className={styles.contentDiv}>
                    <div className={styles.contentTopDiv}>
                        <div className={styles.statusDiv}>
                            <div className={styles.statusCircle} style={{backgroundColor:property.status == "For sale" ? "#01B8C6": "tomato"}}></div>
                            <div className={styles.status}>{property.status}</div>
                        </div>
                        <div className={styles.contentTopDivButtonsDiv}>
                            <button type = "button" className={styles.contentTopDivButton}><ShareIcon/></button>
                            <button type = "button" className={styles.contentTopDivButton}><FavoriteBorderOutlinedIcon/></button>
                        </div>
                    </div>
                    <div className={styles.price}>{property.price}</div>
                    <div className={styles.middleDiv}>
                        <div className={styles.type}>{property.type}</div>
                        <div className={styles.location}>{property.location}</div>
                    </div>
                    <div className={styles.dateDiv}>
                        <div><CalendarMonthIcon /></div>
                        <div>listed {dateDiff(property.date)}</div>
                    </div>
                    <div className={styles.featuresShortcutDiv}>
                        <div className={styles.featureShortcut}><HotelIcon /><span>{property.beds}</span><span className={styles.unit}>beds</span></div>
                        <div className={styles.featureShortcut}><ShowerIcon /><span>{property.baths}</span><span className={styles.unit}>baths</span></div>
                        <div className={styles.featureShortcut}><WeekendIcon /><span>{property.furniture}</span></div>
                    </div>
                    <div className={styles.contactDiv}>
                        <a className={`${styles.callButton} ${styles.contactElement}`} href={property.ownerContacts.phone}><CallIcon /><span>Call</span></a>
                        <a className={`${styles.emailButton} ${styles.contactElement}`} href={property.ownerContacts.email}><EmailIcon /><span>Email</span></a>
                    </div>
                </div>
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
                <Pagination data={data} itemsCount={3} />
            </div>

        </div>
    )
}

export default PropertyDetails
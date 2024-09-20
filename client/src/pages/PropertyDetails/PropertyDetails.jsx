import styles from "./PropertyDetails.module.css"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Pagination } from "../../components";
import data from "../Properties/temporaryData.json"
import { useRef, useState, useEffect } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { dateDiff } from "../../utils";
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';
import WeekendIcon from '@mui/icons-material/Weekend';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

function PropertyDetails({ property }) {
    const [bigImg, setBigImg] = useState({ index: 0, url: property.images[0] });
    const [isExpanded, setIsExpanded] = useState(false)
    const contentRef = useRef(false)
    const [showExpand, setShowExpand] = useState(false);
    const filteredData = [];

    const displayImg = (index) => {
        setBigImg({ index, url: property.images[index] })
    }

    const expand = () => {
        setIsExpanded(!isExpanded)
    }

    const filterData = (data)=>{
        data.filter(p => p.location == property.location && p.type == property.type)
    }

    useEffect(() => {
        filterData(data);
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            console.log(contentHeight)
            setShowExpand(contentHeight > 78);
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <div className={styles.topDiv}>
                    <button type="button" className={styles.BackButton}><NavigateBeforeIcon /> <span>Back to properties</span></button>
                </div>

                <div className={styles.propertyDiv}>
                    <img src={bigImg.url} alt="property image" className={styles.bigImg} />
                    <div className={styles.smallImagesDiv}>
                        {
                            property.images.map((image, index) => {
                                return (
                                    <img
                                        key={index}
                                        id={index}
                                        src={image}
                                        alt="property small img"
                                        className={styles.smallImg}
                                        onClick={() => { displayImg(index) }}
                                        style={{ border: bigImg.index == index ? "#135966 6px solid" : "none" }}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles.contentDiv}>
                        <div className={styles.contentTopDiv}>
                            <div className={styles.statusDiv}>
                                <div className={styles.statusCircle} style={{ backgroundColor: property.status == "For sale" ? "#01B8C6" : "tomato" }}></div>
                                <div className={styles.status}>{property.status}</div>
                            </div>
                            <div className={styles.contentTopDivButtonsDiv}>
                                <button type="button" className={styles.contentTopDivButton}><ShareIcon /></button>
                                <button type="button" className={styles.contentTopDivButton}><FavoriteBorderOutlinedIcon /></button>
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
                        <div className={styles.descriptionHeader}>Description</div>
                        <div className={styles.description}>
                            <div ref={contentRef} className={styles.descriptionText} style={{ maxHeight: isExpanded ? 'none' : '100px', transition: 'max-height 0.3s ease' }}>{property.description}</div>
                            {showExpand && <button type="button" className={styles.readMoreButton} onClick={expand}>
                                <span>{!isExpanded ? "See full description" : "See less description"}</span>
                                {!isExpanded ? <ExpandMoreOutlinedIcon sx={{ fontSize: "30px" }} /> : <ExpandLessOutlinedIcon sx={{ fontSize: "30px" }} />}
                            </button>}
                        </div>
                    </div>

                    <div className={styles.featuresDiv}>
                        <div className={styles.featuresHeader}>Property features</div>
                        <div className={styles.features}>


                            <div className={styles.featuresColumn}>
                                <div className={styles.featuresTopDiv}>Exterior Features</div>
                                <div className={styles.exteriorFeatures}>
                                    {property.exteriorFeatures.map((exteriorFeature) => {
                                        return (
                                            <div className={styles.feature}>
                                                <div className={styles.featureCircle}></div>
                                                <div className={styles.featureText}>{exteriorFeature}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className={styles.featuresColumn}>
                                <div className={styles.featuresTopDiv}>Interior Features</div>
                                <div className={styles.interiorFeatures}>
                                    {property.interiorFeatures.map((interiorFeature) => {
                                        return (
                                            <div className={styles.feature}>
                                                <div className={styles.featureCircle}></div>
                                                <div className={styles.featureText}>{interiorFeature}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.graphsDiv}>
                    <div className={styles.graphConatiner}>
                        <div className={styles.graphHeader}>Floor plan</div>
                        <img className={styles.graph} src={property.floorPlan} alt="floor plan" />
                    </div>
                    <div className={styles.graphConatiner}>
                        <div className={styles.graphHeader}>Map</div>
                        <img className={styles.graph} src={property.locationImg} alt="google map screenshot" />
                    </div>
                </div>

                <div className={styles.similarPropertiesDiv}>
                    <div className={styles.similarPropertiesHeader}>Similar Properties Nearby</div>
                    <Pagination data={filteredData} itemsCount={3} />
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails
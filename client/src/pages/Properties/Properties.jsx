import { SignInAlert, Pagination } from "../../components"
import styles from "./Properties.module.css"
import bannerImage from '../../assets/propertiesPageBanner.jpg';
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import FilterSearch from "../../components/Filter Search/FilterSearch";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";

function Properties() {
    const [data, setData] = useState([]);
    const [displayedProperties, setDisplayedProperties] = useState([]);

    const [selectElementsValues, setSelectElementsValues] = useState({
        location: "",
        status: "",
        beds: "",
        baths: "",
        propertyType: "",
        sortOrder: ""
    });

    const auth = useAuth()

    const [filterVisibility, setFilterVisibility] = useState(false);

    const [headerText, setHeaderText] = useState("")

    const onChangeSelect = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSelectElementsValues({ ...selectElementsValues, [name]: value })
    }

    const preventSubmmision = (event) => {
        event.preventDefault();
        if (selectElementsValues.location != "")
            setHeaderText(` in ${selectElementsValues.location}`)
        else
            setHeaderText("")
    }

    const onChangeSort = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSelectElementsValues({ ...selectElementsValues, [name]: value })
    }

    function openFilter() {
        setFilterVisibility(true);
    }

    function closeFilter() {
        setFilterVisibility(false);
    }

    function searchOnProperties() {
        var filterResult = data.filter((property) => {
            return (
                (property.bedrooms == selectElementsValues.beds || selectElementsValues.beds == "") &&
                (property.bathrooms == selectElementsValues.baths || selectElementsValues.baths == "") &&
                (property.propertyType == selectElementsValues.propertyType || selectElementsValues.propertyType == "") &&
                (property.status == selectElementsValues.status || selectElementsValues.status == "")&&
                property.location.toLowerCase().includes(selectElementsValues.location.toLowerCase())
            )
        })
        setDisplayedProperties(filterResult)
    }

    useEffect(() => {
        // Fetch data from backend when the component is mounted
        async function getData() {
            try {
                const response = await axios.get("http://localhost:3000/property/get-all-properties");
                // Set the fetched data to state
                setData(response.data);
                setDisplayedProperties(response.data)
            } catch (error) {
                console.log("Error fetching properties:", error);
            }
        }

        getData(); // Call the function to fetch data
    }, []); // Empty array means it runs only once when the component mounts

    return (
        <>
            <div className={styles.banner}>
                <img className={styles.bannerImg} src={bannerImage} alt="banner" />
                <div className={styles.bannerText}>
                    <div className={styles.head}>Properties</div>
                    <div className={styles.description}>Search for the best houses in your area.</div>
                </div>
                <div className={styles.searchBar}>
                    <form className={styles.searchBarForm} onSubmit={preventSubmmision}>
                        <input type="text" placeholder="Enter City" value={selectElementsValues.location} name="location" onChange={onChangeSelect} className={`${styles.textInput} ${styles.searchComponent}`} />
                        <select name="status" id="status" value={selectElementsValues.status} onChange={onChangeSelect} className={`${styles.status} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">satus</option>
                            <option value="ForSale">For Sale</option>
                            <option value="ForRent">For Rent</option>
                        </select>
                        <select name="beds" id="beds" value={selectElementsValues.beds} onChange={onChangeSelect} className={`${styles.beds} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <select name="baths" id="baths" value={selectElementsValues.baths} onChange={onChangeSelect} className={`${styles.baths} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select name="propertyType" id="propertyType" value={selectElementsValues.propertyType} onChange={onChangeSelect} className={`${styles.propertyType} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Property Type</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartment</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="duplex">Duplex</option>


                        </select>
                        <button type="button" onClick={openFilter} className={`${styles.filterButton} ${styles.searchComponent}`}><TuneIcon /><span className={styles.hideText}>Filter</span></button>
                        <button type="submit" className={`${styles.searchComponent} ${styles.submitButton}`} onClick={searchOnProperties}><SearchIcon /><span className={styles.hideText}>Search</span></button>
                    </form>
                </div>
            </div>

            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.bodyHeader}>
                        <span className={styles.bodyHeaderText}>Properties{headerText}</span>
                        <select name="sortOrder" id="sortOrder" className={`${styles.sortElement} ${styles.hide}`} value={selectElementsValues.sortOrder} onChange={onChangeSort}>
                            <option value="">Sort order: Anytime</option>
                            <option value="last24h">Sort order: Last 24 hours</option>
                            <option value="last3d">Sort order: Last 3 days</option>
                            <option value="last7d">Sort order: Last 7 days</option>
                            <option value="last14d">Sort order: Last 14 days</option>
                            <option value="last30d">Sort order: Last 30 days</option>
                        </select>
                    </div>
                    {data.length > 0 ? <Pagination data={displayedProperties} itemsCount={6} /> : <p>No properties available</p>}
                </div>
            </div>
            {auth.isAuthenticated ? null : <SignInAlert />}
            {filterVisibility && <FilterSearch onClose={closeFilter} />}
        </>
    )
}

export default Properties
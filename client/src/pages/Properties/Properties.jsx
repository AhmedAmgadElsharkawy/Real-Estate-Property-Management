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

    const [quickFilters, setQuickFilters] = useState({
        location: "",
        status: "",
        beds: "",
        baths: "",
        propertyType: "",
        sortOrder: "Anytime",
        maxPrice: null,
        minPrice: null,
        furnishOptions: ""
    });

    const auth = useAuth()

    const [filterVisibility, setFilterVisibility] = useState(false);

    const [headerText, setHeaderText] = useState("")

    const onChangeSelect = (event) => {
        const name = event.target.name
        const value = event.target.value
        setQuickFilters({ ...quickFilters, [name]: value })
    }

    const preventSubmmision = (event) => {
        event.preventDefault();
        if (quickFilters.location != "")
            setHeaderText(` in ${quickFilters.location}`)
        else
            setHeaderText("")
    }

    const filterByTime = (sortValue, filterResult) => {
        const now = new Date();
        let startDate;
        switch (sortValue) {
            case "last24h":
                startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
                break;
            case "last3d":
                startDate = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
                break;
            case "last7d":
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case "last14d":
                startDate = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
                break;
            case "last30d":
                startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                break;
            default:
                return filterResult;
        }
        return filterResult.filter(property => new Date(property.createdAt) >= startDate);
    }

    function openFilter() {
        setFilterVisibility(true);
    }

    function closeFilter() {
        setFilterVisibility(false);
    }

    function searchOnProperties(sortValue, filters) {
        let filterResult = data.filter((property) => {
            return (
                (property.bedrooms == filters.beds || filters.beds == "") &&
                (property.bathrooms == filters.baths || filters.baths == "") &&
                (property.propertyType == filters.propertyType || filters.propertyType == "") &&
                (property.status == filters.status || filters.status == "") &&
                property.location.toLowerCase().includes(filters.location.toLowerCase()) &&
                (property.furniture == filters.furnishOptions || filters.furnishOptions == "") &&
                (property.price >= filters.minPrice || filters.minPrice == null) &&
                (property.price <= filters.maxPrice || filters.maxPrice == null)
            )
        })
        filterResult = filterByTime(sortValue, filterResult)
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
                        <input type="text" placeholder="Enter City" value={quickFilters.location} name="location" onChange={onChangeSelect} className={`${styles.textInput} ${styles.searchComponent}`} />
                        <select name="status" id="status" value={quickFilters.status} onChange={onChangeSelect} className={`${styles.status} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">satus</option>
                            <option value="ForSale">For Sale</option>
                            <option value="ForRent">For Rent</option>
                        </select>
                        <select name="beds" id="beds" value={quickFilters.beds} onChange={onChangeSelect} className={`${styles.beds} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <select name="baths" id="baths" value={quickFilters.baths} onChange={onChangeSelect} className={`${styles.baths} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select name="propertyType" id="propertyType" value={quickFilters.propertyType} onChange={onChangeSelect} className={`${styles.propertyType} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Property Type</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartment</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="duplex">Duplex</option>
                        </select>
                        <button type="button" onClick={openFilter} className={`${styles.filterButton} ${styles.searchComponent}`}><TuneIcon /><span className={styles.hideText}>Filter</span></button>
                        <button type="submit" className={`${styles.searchComponent} ${styles.submitButton}`} onClick={(event) => { searchOnProperties(quickFilters.sortOrder, quickFilters) }}><SearchIcon /><span className={styles.hideText}>Search</span></button>
                    </form>
                </div>
            </div>

            <div className={styles.bodyWrapper}>
                <div className={styles.body}>
                    <div className={styles.bodyHeader}>
                        <span className={styles.bodyHeaderText}>Properties{headerText}</span>
                        <select name="sortOrder" id="sortOrder" className={`${styles.sortElement} ${styles.hide}`} value={quickFilters.sortOrder} onChange={(event) => { onChangeSelect(event); searchOnProperties(event.target.value, quickFilters); }}>
                            <option value="Anytime">Sort order: Anytime</option>
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
            {filterVisibility && <FilterSearch closeFilter={closeFilter} quickFilters={quickFilters} setQuickFilters={setQuickFilters} searchOnProperties={searchOnProperties} />}
        </>
    )
}

export default Properties
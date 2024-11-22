import { SignInAlert, Pagination } from "../../components"
import styles from "./Properties.module.css"
import bannerImage from '../../assets/propertiesPageBanner.jpg';
import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import FilterSearch from "../../components/Filter Search/FilterSearch";
import axios from "axios";

function Properties() {
    const [data, setData] = useState([]);
    const [selectElementsValues, setSelectElementsValues] = useState({
        text: "",
        price: "",
        beds: "",
        baths: "",
        propertyType: "",
        sortOrder: ""
    });

    const [filterVisibility, setFilterVisibility] = useState(false);

    const [headerText, setHeaderText] = useState("")

    const onChangeSelect = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSelectElementsValues({ ...selectElementsValues, [name]: value })
    }

    const preventSubmmision = (event) => {
        event.preventDefault();
        if (selectElementsValues.text != "")
            setHeaderText(` in ${selectElementsValues.text}`)
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

    useEffect(() => {
        // Fetch data from backend when the component is mounted
        async function getData() {
          try {
            const response = await axios.get("http://localhost:3000/property/get-all-properties");
            // Set the fetched data to state
            setData(response.data);
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
                        <input type="text" placeholder="Enter City" value={selectElementsValues.text} name="text" onChange={onChangeSelect} className={`${styles.textInput} ${styles.searchComponent}`} />
                        <select name="price" id="price" value={selectElementsValues.price} onChange={onChangeSelect} className={`${styles.price} ${styles.searchComponent} ${styles.hide}`}>
                            <option value="">Price</option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
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
                        </select>
                        <button type="button" onClick={openFilter} className={`${styles.filterButton} ${styles.searchComponent}`}><TuneIcon /><span className={styles.hideText}>Filter</span></button>
                        <button type="submit" className={`${styles.searchComponent} ${styles.submitButton}`}><SearchIcon /><span className={styles.hideText}>Search</span></button>
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
                    {data.length > 0 ? <Pagination data={data} itemsCount={6} /> : <p>No properties available</p>}
                </div>
            </div>
            <SignInAlert />
            {filterVisibility && <FilterSearch onClose={closeFilter} />}
        </>
    )
}

export default Properties
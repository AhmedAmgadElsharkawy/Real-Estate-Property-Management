import { PropertyCard,SignInAlert } from "../../components"
import styles from "./Properties.module.css"
import bannerImage from '../../assets/propertiesPageBanner.jpg';
import { useState,useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import data from "./temporaryData.json"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Properties() {
    const [selectElementsValues, setSelectElementsValues] = useState({
        text: "",
        price: "",
        beds: "",
        baths: "",
        propertyType: "",
        sortOrder:""
    });

    const [headerText,setHeaderText] = useState("")

    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(6);

    const onChangeSelect = (event) => {
        const name = event.target.name
        const value = event.target.value
        setSelectElementsValues({ ...selectElementsValues, [name]: value })
    }

    const preventSubmmision = (event)=>{
        event.preventDefault();
        if(selectElementsValues.text != "")
            setHeaderText(` in ${selectElementsValues.text}`)
        else
            setHeaderText("")
    }

    const onChangeSort = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setSelectElementsValues({ ...selectElementsValues, [name]: value })
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex -postsPerPage;
    const currentPost = data.slice(firstPostIndex,lastPostIndex)

    const decreasePage = ()=>{
        setCurrentPage(currentPage-1)
    }

    const increasePage = ()=>{
        console.log(Math.floor(data.length/postsPerPage))
        setCurrentPage(currentPage+1)
    }

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
                        <input type="text" placeholder = "Enter City" value={selectElementsValues.text} name="text" onChange={onChangeSelect} className={`${styles.textInput} ${styles.searchComponent}`}/>
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
                        <button type="button" className={`${styles.filterButton} ${styles.searchComponent}`}><TuneIcon/><span className={styles.hideText}>Filter</span></button>
                        <button type="submit" className={`${styles.searchComponent} ${styles.submitButton}`}><SearchIcon/><span className={styles.hideText}>Search</span></button>
                    </form>
                </div>
            </div>
            
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

                <div className={styles.cardsContainer}>
                    {currentPost.map((card,index)=>{
                        return(
                        <PropertyCard 
                        key = {index}
                        id = {index}
                        src = {card.src} 
                        type={card.type}
                        furniture={card.furniture}
                        location={card.location}
                        price={card.price}
                        beds={card.beds}
                        baths={card.baths}
                        status={card.status}
                        />)
                    })}
                </div>
                <div className={styles.paginationButtonsContainer}>
                    <button onClick={decreasePage} type="button" id="backButton" className={styles.paginationButtons} disabled={currentPage == 1 ? true : false}><NavigateBeforeIcon sx={{fontSize:40}} className={styles.navigationButton}/></button>
                    <button onClick={increasePage} type="button" id="nextButton" className={styles.paginationButtons} disabled = {currentPage == Math.ceil(data.length / postsPerPage) ? true : false}><NavigateNextIcon sx={{fontSize:40}} className={styles.navigationButton}/></button>
                </div>
            </div>
            <SignInAlert/>
        </>
    )
}

export default Properties
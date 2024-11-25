import homeImg from "./homePageImage.jpg";
import styles from "./Home.module.css";
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { HorizontalSlider } from "../../components";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeatureCard from "../../components/Feature Card/FeatureCard.jsx";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GradingIcon from '@mui/icons-material/Grading';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import UsbOffIcon from '@mui/icons-material/UsbOff';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReviewCard from "../../components/Review Card/ReviewCard.jsx";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Home() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  const [fitleredProperties, setFilteredProperties] = useState([])
  const [displayedPropertiesStatus, setDisplayedPropertiesStatus] = useState("all")

  function changeCityName(event) {
    const newCityName = event.target.value;
    setCityName(newCityName);
  }

  function deleteCityName() {
    setCityName("");
  }

  function searchOnPropertyByLocation() {
    var filterResult;
    if (displayedPropertiesStatus == "all")
      filterResult = data.filter((property) => { return property.location.toLowerCase().includes(cityName.toLowerCase()) })
    else
      filterResult = data.filter((property) => { return property.status.toLowerCase().includes(displayedPropertiesStatus.toLowerCase()) && property.location.toLowerCase().includes(cityName.toLowerCase()) })
    setFilteredProperties(filterResult)
  }

  function toggleStatus(newStatus) {
    var filterResult;
    if (newStatus == displayedPropertiesStatus) {
      filterResult = data.filter((property) => { return property.location.toLowerCase().includes(cityName.toLowerCase()) })
      setDisplayedPropertiesStatus("all");
    }
    else {
      filterResult = data.filter((property) => { return property.status.toLowerCase().includes(newStatus.toLowerCase()) && property.location.toLowerCase().includes(cityName.toLowerCase()) })
      setDisplayedPropertiesStatus(newStatus);
    }
    setFilteredProperties(filterResult)
  }

  useEffect(() => {
    // Fetch data from backend when the component is mounted
    async function getData() {
      try {
        const response = await axios.get("http://localhost:3000/property/get-all-properties");
        // Set the fetched data to state
        setData(response.data);
        setFilteredProperties(response.data)
      } catch (error) {
        console.log("Error fetching properties:", error);
      }
    }

    getData(); // Call the function to fetch data
  }, []); // Empty array means it runs only once when the component mounts

  return (
    <div className={styles.mainDev}>
      <img className={styles.homeImg} src={homeImg} alt="" />
      <div className={styles.headerOverlay}>Discover Your Dream Home</div>
      <div className={styles.textOverlay}>Your one-stop real estate destination for buying, renting, and selling properties.</div>
      <div className={styles.searchDev}>
        <button className={`${styles.searchBarDev} ${displayedPropertiesStatus == "forSale" ? styles.activatedStatus : null}`} onClick={() => { toggleStatus("forSale") }}><div className={styles.removedIcon}><SellIcon fontSize="small" /></div><label className={styles.searchBarLabel} htmlFor="">For Sale</label></button>
        <button className={`${styles.searchBarDev} ${displayedPropertiesStatus == "forRent" ? styles.activatedStatus : null}`} onClick={() => { toggleStatus("forRent") }}><div className={styles.removedIcon}><BusinessCenterIcon fontSize="small" /></div><label className={styles.searchBarLabel} htmlFor="">For Rent</label></button>
        <div className={styles.inputAndDeleteDiv}>
          <input className={styles.searchInput} type="text" placeholder="Search by city" value={cityName} onChange={changeCityName} />
          <button className={styles.clearInputButton} onClick={deleteCityName}><div className={styles.nonRemovedIcon}><CloseIcon fontSize="small" /></div></button>
        </div>
        <button className={styles.searchButton} onClick={searchOnPropertyByLocation}><div className={styles.removedIcon}><SearchIcon /></div>Search</button>
      </div>

      <div className={styles.propertiesWrapper}>
        <div className={styles.properties}>
          <h1>Featured Properties</h1>
          {fitleredProperties.length > 0 ? <HorizontalSlider data={fitleredProperties} /> : <p>No properties available</p>}

        </div>
      </div>


      <div className={styles.chooseUsDev}>
        <h1>Why Choose Us</h1>
        <div className={styles.featuresDev}>
          <FeatureCard title="Hassle-Free Searching" content="Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results." Component={() => { return <FactCheckIcon fontSize="large" sx={{ color: "white" }} /> }} />
          <FeatureCard title="Direct communication" content="Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences." Component={() => { return <QuestionAnswerIcon fontSize="large" sx={{ color: "white" }} /> }} />
          <FeatureCard title="Verified Listings" content="Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance." Component={() => { return <GradingIcon fontSize="large" sx={{ color: "white" }} /> }} />
          <FeatureCard title="Local Market Insights" content="Get informed with local market insights on property trends, prices, and neighborhoods for confident decisions." Component={() => { return <SignalCellularAltIcon fontSize="large" sx={{ color: "white" }} /> }} />
          <FeatureCard title="No Middlemen" content="Linked Bricks eliminates intermediaries, granting you more control for faster, direct real estate interactions and decisions." Component={() => { return <UsbOffIcon fontSize="large" sx={{ color: "white" }} /> }} />
          <FeatureCard title="Dedicated Customer Support:" content="Our dedicated customer support team is ready to assist you at every step of your property search journey." Component={() => { return <SupportAgentIcon fontSize="large" sx={{ color: "white" }} /> }} />
        </div>
      </div>


      <div className={styles.reviewDiv}>
        <div className={styles.goToReviewsPage}>
          <div className={styles.reviewsTitle}>
            <h1>Customer Reviews</h1>
            <h5>See what our client’s are saying</h5>
          </div>
          <button className={styles.goToReviewsPageButton}>
            <h4>See all reviews</h4> <ArrowForwardIosIcon fontSize="small" />
          </button>
        </div>
        <div className={styles.peopleReviews}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>


      <ToastContainer />
    </div>
  )
}

export default Home
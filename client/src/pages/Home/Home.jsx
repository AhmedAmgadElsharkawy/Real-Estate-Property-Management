import homeImg from "./homePageImage.jpg";
import styles from "./Home.module.css";
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PropertyCard from '../../components/PropertyCard/PropertyCard.jsx';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FeatureCard from "../../components/Feature Card/FeatureCard.jsx";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GradingIcon from '@mui/icons-material/Grading';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import UsbOffIcon from '@mui/icons-material/UsbOff';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ReviewCard from "../../components/Review Card/ReviewCard.jsx";

function Home() {
  return (
    <div className={styles.mainDev}>
      <img className={styles.homeImg} src={homeImg} alt="" />
      <div className={styles.headerOverlay}>Discover Your Dream Home</div>
      <div className={styles.textOverlay}>Your one-stop real estate destination for buying, renting, and selling properties.</div>
      <div className={styles.searchDev}>
        <div className={styles.searchBarDev}><div className={styles.removedIcon}><SellIcon fontSize="small"/></div><label className={styles.searchBarLabel} htmlFor="">For Sale</label></div>
        <div className={styles.searchBarDev}><div className={styles.removedIcon}><BusinessCenterIcon fontSize="small"/></div><label className={styles.searchBarLabel} htmlFor="">For Rent</label></div>
        <input className={styles.searchInput} type="text" placeholder="Search by city"/>
        <button className={styles.clearInputButton}><div className={styles.removedIcon}><CloseIcon fontSize="small"/></div></button>
        <button className={styles.searchButton}><div className={styles.removedIcon}><SearchIcon/></div>Search</button>
      </div>

      <div className={styles.properties}>
        <h1>Featured Properties</h1>
        <div className={styles.cards}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className={styles.buttonsScrollDev}>
          <button className={styles.scrollButton}><ArrowBackIosNewIcon fontSize="small"/></button>
          <button className={styles.scrollButton}><ArrowForwardIosIcon fontSize="small"/></button>
        </div>
      </div>
      
      <div className={styles.chooseUsDev}>
        <h1>Why Choose Us</h1>
        <div className={styles.featuresDev}>
          <FeatureCard title="Hassle-Free Searching" content="Say goodbye to tedious property searches. Our intuitive platform allows effortless filtering for hassle-free results." Component={()=> { return <FactCheckIcon fontSize="large" sx={{color: "white"}}/>}}/>
          <FeatureCard title="Direct communication" content="Linked Bricks enables direct communication with landlords for questions, negotiations, and transparent experiences." Component={()=> { return <QuestionAnswerIcon fontSize="large" sx={{color: "white"}}/>}}/>
          <FeatureCard title="Verified Listings" content="Browse with confidence – Linked Bricks verifies all listings for your safety and quality assurance." Component={()=> { return <GradingIcon fontSize="large" sx={{color: "white"}}/>}}/>
          <FeatureCard title="Local Market Insights" content="Get informed with local market insights on property trends, prices, and neighborhoods for confident decisions." Component={()=> { return <SignalCellularAltIcon fontSize="large" sx={{color: "white"}}/>}}/>
          <FeatureCard title="No Middlemen" content="Linked Bricks eliminates intermediaries, granting you more control for faster, direct real estate interactions and decisions." Component={()=> { return <UsbOffIcon fontSize="large" sx={{color: "white"}}/>}}/>
          <FeatureCard title="Dedicated Customer Support:" content="Our dedicated customer support team is ready to assist you at every step of your property search journey." Component={()=> { return <SupportAgentIcon fontSize="large" sx={{color: "white"}}/>}}/>
        </div>
      </div>

      <div className={styles.reviewsDev}>
        <ReviewCard/>
      </div>
    </div>
  )
}

export default Home
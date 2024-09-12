import homeImg from "./homePageImage.jpg";
import styles from "./Home.module.css";
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PropertyCard from '../../components/PropertyCard/PropertyCard.jsx';

function Home() {
  return (
    <div className={styles.mainDev}>
      <img className={styles.homeImg} src={homeImg} alt="" />
      <div className={styles.headerOverlay}>Discover Your Dream Home</div>
      <div className={styles.textOverlay}>Your one-stop real estate destination for buying, renting, and selling properties.</div>
      <div className={styles.searchDev}>
        <div className={styles.searchBarDev}><SellIcon fontSize="small"/><label className={styles.searchBarLabel} htmlFor="">For Sale</label></div>
        <div className={styles.searchBarDev}><BusinessCenterIcon fontSize="small"/><label className={styles.searchBarLabel} htmlFor="">For Rent</label></div>
        <input className={styles.searchInput} type="text" placeholder="Search by city"/>
        <button className={styles.clearInputButton}><CloseIcon fontSize="small"/></button>
        <button className={styles.searchButton}><SearchIcon/>Search</button>
      </div>

      <div className={styles.emptyDev}></div>
      <div className={styles.properties}>
        <h1>Featured Properties</h1>
        <div className={styles.cards}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
      
    </div>
  )
}

export default Home
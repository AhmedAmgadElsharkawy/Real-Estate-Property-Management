import styles from "./Pagination.module.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PropertyCard from "../PropertyCard/PropertyCard";
import { useState } from "react";

function Pagination({data}) {

    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(6);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex -postsPerPage;
    const currentPost = data.slice(firstPostIndex,lastPostIndex)

    const decreasePage = ()=>{
        setCurrentPage(currentPage-1)
    }

    const increasePage = ()=>{
        setCurrentPage(currentPage+1)
    }

    return (
        <>
            <div className={styles.cardsContainer}>
                {currentPost.map((card, index) => {
                    return (
                        <PropertyCard
                            key={index}
                            id={index}
                            src={card.src}
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
                <button onClick={decreasePage} type="button" id="backButton" className={styles.paginationButtons} disabled={currentPage == 1 ? true : false}><NavigateBeforeIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
                <button onClick={increasePage} type="button" id="nextButton" className={styles.paginationButtons} disabled={currentPage == Math.ceil(data.length / postsPerPage) ? true : false}><NavigateNextIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
            </div>
        </>
    )
}

export default Pagination
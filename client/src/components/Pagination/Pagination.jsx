/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./Pagination.module.css"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PropertyCard from "../PropertyCard/PropertyCard";
import { useState } from "react";

function Pagination({ data, itemsCount }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(itemsCount);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex)

    const decreasePage = () => {
        setCurrentPage(currentPage - 1)
    }

    const increasePage = () => {
        setCurrentPage(currentPage + 1)
    }

    return (
        <>
            {data.length ? (<div className={styles.cardsContainer}>
                {currentPost.map((card, index) => {
                    return (
                        <PropertyCard
                            key={index}
                            id={index}
                            images={card.images}
                            type={card.type}
                            furniture={card.furniture}
                            location={card.location}
                            price={card.price}
                            beds={card.beds}
                            baths={card.baths}
                            status={card.status}
                        />)
                })}
            </div>)
                :
                <div className={styles.messageText}>No matching properties</div>
            }
            <div className={styles.paginationButtonsContainer}>
                <button onClick={decreasePage} type="button" id="backButton" className={styles.paginationButtons} disabled={currentPage == 1 ? true : false}><NavigateBeforeIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
                <button onClick={increasePage} type="button" id="nextButton" className={styles.paginationButtons} disabled={currentPage == Math.ceil(data.length / postsPerPage) || data.length == 0 ? true : false}><NavigateNextIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
            </div>
        </>
    )
}

export default Pagination
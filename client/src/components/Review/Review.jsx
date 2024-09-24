import styles from "./Review.module.css"
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect, useRef, useState } from "react";

function Review({ userImg, name, date, title, review, rating }) {
    const readmoreRef = useRef()
    const [showReadMore, setShowReadMore] = useState(true)
    const numberOfStars = Math.floor(rating)
    const nummberOfHalfStars = Math.ceil(rating) - Math.floor(rating)
    const numberOfEmptyStars = 5 - Math.ceil(rating)
    const starsArr = Array(numberOfStars).fill(0)
    const halfStarsArr = Array(nummberOfHalfStars).fill(0)
    const emptyStarsArr = Array(numberOfEmptyStars).fill(0)

    const createStars = () => {

    }

    useEffect(() => {
        if (readmoreRef.current) {
            setShowReadMore(readmoreRef.current.scrollHeight > 144)
        }
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.userInfo}>
                        <img src={userImg} alt="user image" className={styles.userImage} />
                        <div className={styles.info}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.date}>{date}</div>
                        </div>
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.reviewWrapper}>
                        <div className={styles.review} ref={readmoreRef}>
                            {review}
                        </div>
                        {showReadMore && <button className={styles.readMore} type="button">read more</button>}
                    </div>
                </div>
                <div className={styles.rating}>
                    {
                        starsArr.map((e,index) => {
                            return (<StarIcon key = {index} sx={{ fontSize: "40px", color: "#43A048" }} />)
                        })
                    }
                    {
                        halfStarsArr.map((e,index) => {
                            return (<StarHalfIcon key = {index} sx={{ fontSize: "40px", color: "#43A048" }} />)
                        })
                    }
                    {
                        emptyStarsArr.map((e,index) => {
                            return (<StarOutlineIcon key = {index} sx={{ fontSize: "40px", color: "#43A048" }} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Review
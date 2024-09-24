import styles from "./Review.module.css"

function Review() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.info}></div>
                <div className={styles.header}></div>
                <div className={styles.comment}></div>
            </div>
            <div className={styles.rating}></div>
        </div>
    )
}

export default Review
/* eslint-disable react/prop-types */
import styles from "./FeatureCard.module.css"

function FeatureCard({title, content, Component}) {
    return (
        <div  className={styles.mainDev}>
            <div className={styles.iconDev}>
                <Component />
            </div>
            <div className={styles.contentDev}>
                <p className={styles.title}>{title}</p>
                <p className={styles.content}>{content}</p>
            </div>
        </div>
    )
}

export default FeatureCard
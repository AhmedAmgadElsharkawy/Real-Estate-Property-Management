import styles from "./FeatureCard.module.css"

function FeatureCard({title, content, Component}) {
    return (
        <dev  className={styles.mainDev}>
            <dev className={styles.iconDev}>
                <Component />
            </dev>
            <dev className={styles.contentDev}>
                <p className={styles.title}>{title}</p>
                <p>{content}</p>
            </dev>
        </dev>
    )
}

export default FeatureCard
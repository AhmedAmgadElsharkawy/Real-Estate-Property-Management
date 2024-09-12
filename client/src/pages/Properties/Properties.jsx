import { PropertyCard } from "../../components"
import styles from "./Properties.module.css"

function Properties() {
    return (
    <>
        <div className={styles.cardsContainer}>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </div>
    </>
    )
}

export default Properties
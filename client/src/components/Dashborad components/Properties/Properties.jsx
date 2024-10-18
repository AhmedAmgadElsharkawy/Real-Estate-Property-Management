/* eslint-disable react/prop-types */
import styles from './Properties.module.css';
import {HorizontalSlider} from "../../../components"

function Properties({data}) {
    return (
        <div className={styles.contentDiv}>
           <HorizontalSlider data={data}/>
        </div>
    )
}

export default Properties
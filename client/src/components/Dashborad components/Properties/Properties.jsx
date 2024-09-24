/* eslint-disable react/prop-types */
import styles from './Properties.module.css';
import PropertyCard from '../../PropertyCard/PropertyCard';

function Properties({data}) {
    return (
        <div className={styles.contentDiv}>
            {
                data.map((card, index) => {
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
        </div>
    )
}

export default Properties
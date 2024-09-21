import styles from "./slider.module.css"
import data from "../../pages/Properties/temporaryData.json"
import { PropertyCard } from ".."
import { useEffect, useRef } from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Slider() {
  const cardsRefs = useRef([])
  const sliderContainerRef = useRef();
  var targetCardIndex = 0;

  const increase = () => {
    targetCardIndex = Math.min(targetCardIndex + 1, data.length - 1);
    const targetCard = cardsRefs.current[targetCardIndex];
    const container = sliderContainerRef.current
    if (targetCard) {
      const targetPosition = targetCard.getBoundingClientRect().left;
      const containerPosition = container.getBoundingClientRect().left;
      const scrollAmount = targetPosition - containerPosition + container.scrollLeft;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  const decrease = () => {
    targetCardIndex = Math.max(targetCardIndex - 1, 0);
    const targetCard = cardsRefs.current[targetCardIndex];
    const container = sliderContainerRef.current;

    if (targetCard) {
      const targetPosition = targetCard.getBoundingClientRect().left;
      const containerPosition = container.getBoundingClientRect().left;
      const scrollAmount = targetPosition - containerPosition + container.scrollLeft;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cardsContainer} ref={sliderContainerRef}>
          {data.map((card, index) => {
            return (
              <div ref={el => cardsRefs.current[index] = el} key={index}>
                <PropertyCard
                  id={index}
                  src={card.src}
                  type={card.type}
                  furniture={card.furniture}
                  location={card.location}
                  price={card.price}
                  beds={card.beds}
                  baths={card.baths}
                  status={card.status}
                />
              </div>
            )
          })}
        </div>
        <div className={styles.paginationButtonsContainer}>
          <button onClick={decrease} type="button" id="backButton" className={styles.paginationButtons} ><NavigateBeforeIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
          <button onClick={increase} type="button" id="nextButton" className={styles.paginationButtons} ><NavigateNextIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
        </div>
      </div>
    </div>
  )
}

export default Slider
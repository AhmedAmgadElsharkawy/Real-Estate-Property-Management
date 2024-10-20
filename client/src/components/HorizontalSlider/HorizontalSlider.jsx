import styles from "./HorizontalSlider.module.css"
import { PropertyCard } from ".."
import { useRef, useState } from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function HorizontalSlider({ data }) {
  const cardsRefs = useRef([])
  const sliderContainerRef = useRef();
  const [targetCardIndex, setTargetCardIndex] = useState(0)
  const length = data.length

  const increase = () => {
    const targetCard = cardsRefs.current[targetCardIndex + 1];
    const container = sliderContainerRef.current
    if (targetCard) {
      const targetPosition = targetCard.getBoundingClientRect().left;
      const containerPosition = container.getBoundingClientRect().left;
      const scrollAmount = targetPosition - containerPosition + container.scrollLeft;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setTargetCardIndex(targetCardIndex + 1)
    }
  }

  const decrease = () => {
    const targetCard = cardsRefs.current[targetCardIndex - 1];
    const container = sliderContainerRef.current;

    if (targetCard) {
      //The Element.getBoundingClientRect() method returns a DOMRect object {top,bottom,left,right,x,y}
      //providing information about the size of an element and its position relative to the viewport.
      //target position is the positon with respect to viewport
      const targetPosition = targetCard.getBoundingClientRect().left;
      //container position is the positon with respect to viewport
      const containerPosition = container.getBoundingClientRect().left;
      //scrollLeft -> number of pixels by which the element's content is scrolled from its left edge.
      const scrollAmount = targetPosition - containerPosition + container.scrollLeft;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setTargetCardIndex(targetCardIndex - 1)
    }
  }

  return (
    <div className={styles.container}>
      {length ?
        <div className={styles.cardsContainer} ref={sliderContainerRef}>
          {data.map((card, index) => {
            return (
              <div ref={el => cardsRefs.current[index] = el} key={index} className={styles.cardWrapper}>
                <PropertyCard
                  id={index}
                  images={card.images}
                  type={card.type}
                  furniture={card.furniture}
                  location={card.location}
                  price={card.price}
                  beds={card.beds}
                  baths={card.baths}
                  status={card.status}
                  favourite={false}
                />
              </div>
            )
          })}
          <div className={styles.invisible}></div>
        </div>
        :
        <div className={styles.messageText}>No matching properties</div>
      }
      <div className={styles.paginationButtonsContainer}>
        <button onClick={decrease} type="button" id="backButton" className={styles.paginationButtons} disabled={targetCardIndex == 0}><NavigateBeforeIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
        <button onClick={increase} type="button" id="nextButton" className={styles.paginationButtons} disabled={targetCardIndex >= length - 1} ><NavigateNextIcon sx={{ fontSize: 40 }} className={styles.navigationButton} /></button>
      </div>
    </div>
  )
}

export default HorizontalSlider;
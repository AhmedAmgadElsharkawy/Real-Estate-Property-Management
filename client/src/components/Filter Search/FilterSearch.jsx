/* eslint-disable react/prop-types */
import styles from './FilterSearch.module.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function FilterSearch({onClose}) {
    const [filters, setFilters] = useState({
        bedrooms: "",
        bathrooms: "",
        minPrice: null,
        maxPrice: null,
        propertyType: "show all",
        furnishOptions: "show all",
        sortBy: "Anytime"
    })

    function selectChagne(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFilters({...filters, [name]: value});
        console.log(name, value)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.filterDiv}>
                <div className={styles.titleDiv}>
                    <h2>Filter your search results</h2>
                    <button className={styles.closeButton} onClick={onClose}><div className={styles.closeButtonSmallerDiv}><CloseIcon fontSize="small"/></div></button>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Bedrooms</h4>
                        <select className={styles.smallSelect} name="bedrooms" id="bedrooms" onChange={selectChagne}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Bathrooms</h4>
                        <select className={styles.smallSelect} name="bathrooms" id="bathrooms" onChange={selectChagne}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Min Price</h4>
                        <input className={styles.smallSelect} type="number" placeholder='No Min' name='minPrice' onChange={selectChagne}/>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Max Price</h4>
                        <input className={styles.smallSelect} type="number" placeholder='No Max' name='maxPrice' onChange={selectChagne}/>
                    </div>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Property Type</h4>
                    <select className={styles.bigSelect} name="propertyType" id="propertyType"  onChange={selectChagne}>
                        <option value="Show all">Show all</option>
                        <option value="Saona">Saona</option>
                        <option value="Jacozy">Jacozy</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Furnished options</h4>
                    <select className={styles.bigSelect} name="furnishOptions" id="furnishOptions"  onChange={selectChagne}>
                        <option value="Show all">Show all</option>
                        <option value="Fully-furnished">Fully-furnished</option>
                        <option value="Semi-furnished">Semi-furnished</option>
                        <option value="Not-furnished">Not-furnished</option>
                    </select>
                </div>

                <div className={styles.sortMainDiv}>
                    <h4>Sort order</h4>
                    <form action="" onChange={selectChagne} name='sortBy'>
                        <div className={styles.sortDiv}>
                            <div className={styles.radioDiv}>
                                <input type="radio" id="option1" name="sortBy" value="Anytime" />
                                <label htmlFor='option1'>Anytime</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option2" name="sortBy" value="24hours" />
                                <label htmlFor='option2'>Last 24 hours</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option3" name="sortBy" value="3days" />
                                <label htmlFor='option3'>Last 3 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option4" name="sortBy" value="7days" />
                                <label htmlFor='option1'>Last 7 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option5" name="sortBy" value="14days" />
                                <label htmlFor='option2'>Last 14 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option6" name="sortBy" value="30days" />
                                <label htmlFor='option3'>Last 30 days</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={styles.buttonsDiv}>
                    <button className={styles.resetButton}>Reset filters</button>
                    <button className={styles.updateButton}>Update results</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSearch
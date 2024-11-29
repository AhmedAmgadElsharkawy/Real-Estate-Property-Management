/* eslint-disable react/prop-types */
import styles from './FilterSearch.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function FilterSearch({ closeFilter, filters, setFilters , searchOnProperties}) {

    const [timeFilter,setTimeFilter] = useState(filters.sortOrder)

    function selectChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFilters({ ...filters, [name]: value });
    }

    function timeFilterChange(event){
        let value = event.target.value
        setTimeFilter(value)
    }




    function resetFilters() {
        setFilters({
            location: "",
            status: "",
            beds: "",
            baths: "",
            propertyType: "",
            sortOrder: "",
            maxPrice: null,
            minPrice: null,
            furnishOptions: ""
        })
    }

    function resetNotQuickAccessFilters(){
        setFilters({
            ...filters,
            maxPrice: null,
            minPrice: null,
            furnishOptions: ""
        })
        closeFilter()
    }

    function updateResults(){
        closeFilter()
        setFilters({...filters,sortOrder:timeFilter})
        searchOnProperties(timeFilter)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.filterDiv}>
                <div className={styles.titleDiv}>
                    <h2>Filter your search results</h2>
                    <button className={styles.closeButton} onClick={resetNotQuickAccessFilters}><div className={styles.closeButtonSmallerDiv}><CloseIcon fontSize="small" /></div></button>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Bedrooms</h4>
                        <select className={styles.smallSelect} name="beds" id="beds" onChange={selectChange} value={filters.beds}>
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
                        <select className={styles.smallSelect} name="baths" id="baths" onChange={selectChange} value={filters.baths}>
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
                        <input className={styles.smallSelect} type="number" placeholder='No Min' name='minPrice' onChange={selectChange} value={filters.minPrice || 0} />
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Max Price</h4>
                        <input className={styles.smallSelect} type="number" placeholder='No Max' name='maxPrice' onChange={selectChange} value={filters.maxPrice  || 1000} />
                    </div>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Property Type</h4>
                        <select className={styles.smallSelect} name="propertyType" id="propertyType" onChange={selectChange} value={filters.propertyType}>
                            <option value="">Show All</option>
                            <option value="villa">Villa</option>
                            <option value="apartment">Apartment</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="duplex">Duplex</option>
                        </select>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Status</h4>
                        <select name="status" id="status" value={filters.status} onChange={selectChange} className={styles.smallSelect}>
                            <option value="">satus</option>
                            <option value="ForSale">For Sale</option>
                            <option value="ForRent">For Rent</option>
                        </select>
                    </div>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Furnished options</h4>
                    <select className={styles.bigSelect} name="furnishOptions" id="furnishOptions" onChange={selectChange} value={filters.furnishOptions}>
                        <option value="Show all">Show all</option>
                        <option value="Fully-furnished">Fully-furnished</option>
                        <option value="Semi-furnished">Semi-furnished</option>
                        <option value="Not-furnished">Not-furnished</option>
                    </select>
                </div>

                <div className={styles.sortMainDiv}>
                    <h4>Sort order</h4>
                    <form action="" name='sortOrder' value={filters.sortOrder}>
                        <div className={styles.sortDiv}>
                            <div className={styles.radioDiv}>
                                <input type="radio" id="option1" name="sortOrder" value="Anytime" checked = {timeFilter === "Anytime"} onChange={timeFilterChange}/>
                                <label htmlFor='option1'>Anytime</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option2" name="sortOrder" value="last24h"  checked = {timeFilter === "last24h"} onChange={timeFilterChange}/>
                                <label htmlFor='option2'>Last 24 hours</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option3" name="sortOrder" value="last3d" checked = {timeFilter === "last3d"} onChange={timeFilterChange}/>
                                <label htmlFor='option3'>Last 3 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option4" name="sortOrder" value="last7d"  checked = {timeFilter === "last7d"} onChange={timeFilterChange}/>
                                <label htmlFor='option1'>Last 7 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option5" name="sortOrder" value="last14d"  checked = {timeFilter === "last14d"} onChange={timeFilterChange}/>
                                <label htmlFor='option2'>Last 14 days</label>
                            </div>

                            <div className={styles.radioDiv}>
                                <input type="radio" id="option6" name="sortOrder" value="last30d" checked = {timeFilter === "last30d"} onChange={timeFilterChange}/>
                                <label htmlFor='option3'>Last 30 days</label>
                            </div>
                        </div>
                    </form>
                </div>

                <div className={styles.buttonsDiv}>
                    <button className={styles.resetButton} onClick={resetFilters}>Reset filters</button>
                    <button className={styles.updateButton} onClick={updateResults}>Update results</button>
                </div>
            </div>
        </div>
    )
}

export default FilterSearch
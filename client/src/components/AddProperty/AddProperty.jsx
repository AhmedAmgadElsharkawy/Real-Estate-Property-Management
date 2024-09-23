/* eslint-disable react/prop-types */
import styles from './AddProperty.module.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

function AddProperty({onClose}) {
    const [propertyImages, setPropertyImages] = useState([""]);

    function addImages() {
        setPropertyImages([...propertyImages, ""]);
    }

    function clearImages() {
        setPropertyImages([""])
    }

    function uploadPropertyImage(event) {
        const id = event.target.id;
        const value = event.target.files[0].name;
        propertyImages[id] = value;
        setPropertyImages([...propertyImages])
    }

    const [filters, setFilters] = useState({
        bedrooms: "",
        bathrooms: "",
        price: "",
        propertyType: "show all",
        furnishOptions: "show all",
        
    })

    function selectChagne(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFilters({...filters, [name]: value});
        console.log(filters)
    }

    function resetFilters() {
        setFilters({
            bedrooms: "",
            bathrooms: "",
            minPrice: "",
            maxPrice: "",
            propertyType: "show all",
            furnishOptions: "show all",
            sortBy: "Anytime",
        })

        console.log(filters)
    }

    return (
        <div className={styles.mainDiv}>
            <div className={styles.filterDiv}>
                <div className={styles.titleDiv}>
                    <h2>Add a property</h2>
                    <button className={styles.closeButton} onClick={onClose}><div className={styles.closeButtonSmallerDiv}><CloseIcon fontSize="small"/></div></button>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Bedrooms</h4>
                        <select className={styles.smallSelect} name="bedrooms" id="bedrooms" onChange={selectChagne} value={filters.bedrooms}>
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
                        <select className={styles.smallSelect} name="bathrooms" id="bathrooms" onChange={selectChagne} value={filters.bathrooms}>
                            <option value="">Any</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Price</h4>
                        <input className={styles.smallSelect} type="number" placeholder='Enter the price' name='price' onChange={selectChagne} value={filters.price}/>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Status</h4>
                        <select className={styles.smallSelect} name="saleType" id="">
                            <option value="ForSale">For sale</option>
                            <option value="ForRent">For rent</option>
                        </select>
                    </div>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Location</h4>
                        <input className={styles.smallSelect} type="text" placeholder='Enter the location' name='location' onChange={selectChagne} value={filters.location}/>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Location in map</h4>
                        <label htmlFor="formId" className={styles.smallSelect}>
                            <input className={styles.imageInput} type="file" id="formId" hidden />
                            Choose an image
                        </label>
                    </div>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Property Type</h4>
                    <select className={styles.bigSelect} name="propertyType" id="propertyType"  onChange={selectChagne} value={filters.propertyType}>
                        <option value="Show all">Show all</option>
                        <option value="Saona">Saona</option>
                        <option value="Jacozy">Jacozy</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Furnished options</h4>
                    <select className={styles.bigSelect} name="furnishOptions" id="furnishOptions" onChange={selectChagne} value={filters.furnishOptions}>
                        <option value="Show all">Show all</option>
                        <option value="Fully-furnished">Fully-furnished</option>
                        <option value="Semi-furnished">Semi-furnished</option>
                        <option value="Not-furnished">Not-furnished</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Floor Plan</h4>
                    <label htmlFor="formId" className={styles.bigSelect}>
                        <input className={styles.imageInput} type="file" id="formId" hidden />
                        Choose an image
                        <WallpaperIcon fontSize='small' />
                    </label>
                </div>

                <div className={styles.descriptionDiv}>
                    <h4>Property description</h4>
                    <textarea name="description" className={styles.textArea} placeholder="Enter your description"></textarea>
                </div>

                <div className={styles.controlDiv}>
                    <h4>Propert images</h4>
                    {
                        propertyImages.map((curr, index) => {
                            console.log(index)
                            return (
                                <div key={index}>
                                    <label htmlFor={index} className={styles.bigSelect}>
                                        <input onChange={uploadPropertyImage} type="file" id={index} hidden/>
                                        {curr != "" ? curr : "Choose an image"}
                                        <WallpaperIcon fontSize='small' />
                                    </label>
                                </div>
                            )
                        })
                    }

                    <div className={styles.controlImages}>
                        <button onClick={clearImages} className={styles.clearButton}>Clear images</button>
                        <button onClick={addImages} className={styles.addButton}>Add another image</button>
                    </div>
                </div>

                <div className={styles.buttonsDiv}>
                    <button className={styles.resetButton} onClick={resetFilters}>Reset filters</button>
                    <button className={styles.updateButton}>Update results</button>
                </div>
            </div>
        </div>
    )
}

export default AddProperty
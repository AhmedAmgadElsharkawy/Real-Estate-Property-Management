/* eslint-disable react/prop-types */
import styles from './AddProperty.module.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

function AddProperty({onClose}) {
    const [propertyImages, setPropertyImages] = useState([""]);
    const [interiorFeatures, setInteriorFeatures] = useState([""]);
    const [exteriorFeatures, setExteriorFeatures] = useState([""]);

    function addImages() {
        setPropertyImages([...propertyImages, ""]);
    }

    function clearImages() {
        setPropertyImages([""])
    }

    function addInterior() {
        setInteriorFeatures([...interiorFeatures, ""]);
    }

    function clearInterior() {
        setInteriorFeatures([""])
    }    

    function addExterior() {
        setExteriorFeatures([...exteriorFeatures, ""]);
    }

    function clearExterior() {
        setExteriorFeatures([""])
    }   

    function uploadPropertyImage(event) {
        const id = event.target.id;
        const value = event.target.files[0].name;
        propertyImages[id] = value;
        setPropertyImages([...propertyImages]);
        setdetails({...details, images: propertyImages});
    }

    const [details, setdetails] = useState({
        bedrooms: "",
        bathrooms: "",
        price: "",
        propertyType: "show all",
        furnishOptions: "show all",
        description: "",
        status: "",
        floorPlan: "",
        location: "",
        locationOnMap: "",
        images: propertyImages,
    })

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type == "file")
            value = event.target.files[0].name;
        setdetails({...details, [name]: value});
    }

    function resetdetails() {
        setdetails({
            bedrooms: "",
            bathrooms: "",
            price: "",
            propertyType: "show all",
            furnishOptions: "show all",
            description: "",
            status: "",
            floorPlan: "",
            location: "",
            locationOnMap: "",
            images: propertyImages,
        })
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
                        <select className={styles.smallSelect} name="bedrooms" id="bedrooms" onChange={handleChange} value={details.bedrooms}>
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
                        <select className={styles.smallSelect} name="bathrooms" id="bathrooms" onChange={handleChange} value={details.bathrooms}>
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
                        <input className={styles.smallSelect} type="number" placeholder='Enter the price' name='price' onChange={handleChange} value={details.price}/>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Status</h4>
                        <select className={styles.smallSelect} name="saleType" id="" value={details.status}>
                            <option value="ForSale">For sale</option>
                            <option value="ForRent">For rent</option>
                        </select>
                    </div>
                </div>

                <div className={styles.smallChooseDiv}>
                    <div className={styles.smallerChoosediv}>
                        <h4>Location</h4>
                        <input className={styles.smallSelect} type="text" placeholder='Enter the location' name='location' onChange={handleChange} value={details.location}/>
                    </div>
                    <div className={styles.smallerChoosediv}>
                        <h4>Location in map</h4>
                        <label htmlFor="locationImage" className={styles.smallSelect}>
                            <input name='locationOnMap' onChange={handleChange} className={styles.imageInput} type="file" id="locationImage" hidden />
                            {details.locationOnMap != "" ? details.locationOnMap : "Choose an image"}
                        </label>
                    </div>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Property Type</h4>
                    <select className={styles.bigSelect} name="propertyType" id="propertyType"  onChange={handleChange} value={details.propertyType}>
                        <option value="Show all">Show all</option>
                        <option value="Saona">Saona</option>
                        <option value="Jacozy">Jacozy</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Furnished options</h4>
                    <select className={styles.bigSelect} name="furnishOptions" id="furnishOptions" onChange={handleChange} value={details.furnishOptions}>
                        <option value="Show all">Show all</option>
                        <option value="Fully-furnished">Fully-furnished</option>
                        <option value="Semi-furnished">Semi-furnished</option>
                        <option value="Not-furnished">Not-furnished</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Floor plan</h4>
                    <label htmlFor="floorImage" className={styles.bigSelect}>
                        <input name='floorPlan' onChange={handleChange} className={styles.imageInput} type="file" id="floorImage" hidden />
                        {details.floorPlan != "" ? details.floorPlan : "Choose an image"}
                        <WallpaperIcon fontSize='small' />
                    </label>
                </div>

                <div className={styles.descriptionDiv}>
                    <h4>Property description</h4>
                    <textarea onChange={handleChange} name="description" className={styles.textArea} placeholder="Enter your description" value={details.description}></textarea>
                </div>

                <div className={styles.controlDiv}>
                    <h4>Property images</h4>
                    {
                        propertyImages.map((curr, index) => {
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

                <div className={styles.controlDiv}>
                    <h4>Property interior features</h4>
                    {
                        interiorFeatures.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <input className={styles.smallSelect} type="text" placeholder='Enter the feature'/>
                                </div>
                            )
                        })
                    }
                    <div className={styles.controlImages}>
                        <button onClick={clearInterior} className={styles.clearButton}>Clear features</button>
                        <button onClick={addInterior} className={styles.addButton}>Add another feature</button>
                    </div>
                </div>

                <div className={styles.buttonsDiv}>
                    <button className={styles.resetButton} onClick={resetdetails}>Reset details</button>
                    <button className={styles.updateButton}>Update results</button>
                </div>
            </div>
        </div>
    )
}

export default AddProperty
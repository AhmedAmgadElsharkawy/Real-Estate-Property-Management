/* eslint-disable react/prop-types */
import styles from './AddProperty.module.css';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import axios from "axios";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function AddProperty({onClose}) {
    const [propertyImages, setPropertyImages] = useState([""]);
    const [interiorFeatures, setInteriorFeatures] = useState([""]);
    const [exteriorFeatures, setExteriorFeatures] = useState([""]);
    const [details, setdetails] = useState({
        bedrooms: "",
        bathrooms: "",
        price: "",
        propertyType: "Saona",
        furnishOptions: "Fully-furnished",
        description: "",
        status: "ForSale",
        floorPlan: "",
        location: "",
        locationOnMap: "",
        images: propertyImages,
        interiorFeatures: interiorFeatures,
        exteriorFeatures: exteriorFeatures
    })

    function addImages() {
        setPropertyImages([...propertyImages, ""]);
    }

    function clearImages() {
        setPropertyImages([""])
        setdetails({...details, interiorFeatures: interiorFeatures})
    }

    function addInterior() {
        setInteriorFeatures([...interiorFeatures, ""]);
    }

    function clearInterior() {
        setInteriorFeatures([""])
        setdetails({...details, interiorFeatures: interiorFeatures})
    }    

    function addExterior() {
        setExteriorFeatures([...exteriorFeatures, ""]);
    }

    function clearExterior() {
        setExteriorFeatures([""])
        setdetails({...details, interiorFeatures: interiorFeatures})
    }   

    function uploadPropertyImage(event) {
        const id = event.target.id;
        const value = event.target.files[0].name;
        propertyImages[id] = value;
        setPropertyImages([...propertyImages]);
        setdetails({...details, images: propertyImages});
    }

    function handleInteriorFeature(event) {
        const id = event.target.id;
        const value = event.target.value;
        interiorFeatures[id] = value;
        setInteriorFeatures([...interiorFeatures]);
        setdetails({...details, interiorFeatures: interiorFeatures});
    }

    function handleExteriorFeature(event) {
        const id = event.target.id;
        const value = event.target.value;
        exteriorFeatures[id] = value;
        setExteriorFeatures([...exteriorFeatures]);
        setdetails({...details, exteriorFeatures: exteriorFeatures});
    }

    function handleChange(event) {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type == "file")
            value = event.target.files[0].name;
        setdetails({...details, [name]: value});
    }

    function resetdetails() {
        setExteriorFeatures([""]);
        setInteriorFeatures([""]);
        setPropertyImages([""]);
        setdetails({
            bedrooms: "",
            bathrooms: "",
            price: "",
            propertyType: "Saona",
            furnishOptions: "Fully-furnished",
            description: "",
            status: "",
            floorPlan: "",
            location: "",
            locationOnMap: "",
            images: propertyImages,
        })
    }

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
    }

    async function submitProperty(e) {
        e.preventDefault();
        if (details.bathrooms === "" || details.bedrooms === "")
            toast.error("Number of rooms should be added", toastOptions)
        else if (details.price === "")
            toast.error("Price should be added", toastOptions);
        else if (details.furnishOptions === "")
            toast.error("Furniture details should be added", toastOptions);
        else if (details.propertyType === "")
            toast.error("Property type should be added", toastOptions);
        else if (details.location === "")
            toast.error("Location should be added", toastOptions);
        else if (details.description === "")
            toast.error("Description should be added", toastOptions);
        else if (details.exteriorFeatures[0] === "")
            toast.error("Exterior features should be added", toastOptions);
        else if (details.interiorFeatures[0] === "")
            toast.error("Interior features should be added", toastOptions);
            
        else {
            try {
                await axios.post("http://localhost:3000/property/add", details)
                onClose();
            } catch (error) {
                toast.error(error.message, toastOptions)
            }
        }
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
                        <select onChange={handleChange} className={styles.smallSelect} name="status" id="" value={details.status}>
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
                        <option value="Saona">Saona</option>
                        <option value="Jacozy">Jacozy</option>
                    </select>
                </div>

                <div className={styles.bigChooseDiv}>
                    <h4>Furnished options</h4>
                    <select className={styles.bigSelect} name="furnishOptions" id="furnishOptions" onChange={handleChange} value={details.furnishOptions}>
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
                                    <input onChange={handleInteriorFeature} id={index} className={styles.smallSelect} type="text" placeholder='Enter the feature' value={feature}/>
                                </div>
                            )
                        })
                    }
                    <div className={styles.controlImages}>
                        <button onClick={clearInterior} className={styles.clearButton}>Clear features</button>
                        <button onClick={addInterior} className={styles.addButton}>Add another feature</button>
                    </div>
                </div>

                <div className={styles.controlDiv}>
                    <h4>Property exterior features</h4>
                    {
                        exteriorFeatures.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <input onChange={handleExteriorFeature} id={index} className={styles.smallSelect} type="text" placeholder='Enter the feature' value={feature}/>
                                </div>
                            )
                        })
                    }
                    <div className={styles.controlImages}>
                        <button onClick={clearExterior} className={styles.clearButton}>Clear features</button>
                        <button onClick={addExterior} className={styles.addButton}>Add another feature</button>
                    </div>
                </div>

                <div className={styles.buttonsDiv}>
                    <button className={styles.resetButton} onClick={resetdetails}>Reset details</button>
                    <button className={styles.updateButton} onClick={submitProperty}>Update results</button>
                </div>
            </div>
        </div>
    )
}

export default AddProperty
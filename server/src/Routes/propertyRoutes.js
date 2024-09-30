import express from "express";
import Property from "../models/property.js";

const router = express.Router();

router.get("/", () => {

})

router.post("/add-property", async (req, res) => {
    const price = req.body.price;
    const beds = req.body.bedrooms;
    const baths = req.body.bathrooms;
    const furniture = req.body.furniture;
    const type = req.body.type;
    const location = req.body.location;
    const status = req.body.status;
    const description = req.body.description;
    const floorPlan = req.body.floorPlan;
    const locationImg = req.body.locationImg;
    const images = req.body.images;
    const exteriorFeatures = req.body.exteriorFeatures;
    const interiorFeatures = req.body.interiorFeatures;

    try {
        const property = new Property({
            price: price,
            beds: beds,
            baths: baths,
            furniture: furniture,
            type: type,
            location: location,
            status: status,
            description: description,
            exteriorFeatures: exteriorFeatures,
            interiorFeatures: interiorFeatures,
            email: "abdullah@gmail.com",
            phone: "123456"
        })
        await property.save();
        res.status(200).json({ message: "Property added successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something wrong happened, Property wasn't added", error: error.message});
    }
})

router.delete("/delete-property", async (req, res) => {
    const id = req.body.id;

    try {
        await Property.deleteOne({id: req.body.id});
        throw new Error("wroooong")
        res.status(200).json({message: "Property was deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Something wrong happened while deleteing", error: error.message})
    }
})

export {router as PropertyRouter};
import express from "express";
import Property from "../models/property.js";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/get-all-properties", async(req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching properties", error: error.message });
    }
})

router.post("/add-property", upload.any(), async (req, res) => {
    try{
        var imagesUrl = []
        var locationOnMapUrl = ""
        var floorPlanUrl = ""
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, { folder: 'properties' });
            if (file.fieldname == "floorPlan")
                floorPlanUrl = result.secure_url
            else if (file.fieldname == "locationOnMap")
                locationOnMapUrl = result.secure_url
            else imagesUrl.push(result.secure_url)
        }
        const property = new Property({...req.body, images: imagesUrl, floorPlan: floorPlanUrl, locationOnMap: locationOnMapUrl, email: "abdullah@gmail.com", phone: "01148770014"})
        await property.save();
        res.status(200).json({ message: "Property added successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something wrong happened, Property wasn't added", error: error.message});
    }
})

router.patch("/update-property", async (req, res) => {
    try {
        await Property.updateOne({...req.body});
        res.status(200).json({ message: "Property updated successfully" })
    } catch (error) {
        res.status(500).json({ message: "Something wrong happened while updating", error: error.message});
    }
})

router.delete("/delete-property", async (req, res) => {
    try {
        await Property.deleteOne({id: req.body.id});
        res.status(200).json({message: "Property was deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Something wrong happened while deleteing", error: error.message})
    }
})

export {router as PropertyRouter};
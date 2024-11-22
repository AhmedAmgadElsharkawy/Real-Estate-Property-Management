import express from "express";
import Property from "../models/property.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", () => {
})

router.post("/add-property", upload.any(), async (req, res) => {
    try{
        console.log(req.files)
        console.log(req.body)
        const property = new Property({...req.body, email: "abdullah@gmail.com", phone: "01148770014"})
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
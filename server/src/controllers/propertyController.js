import Property from "../models/property.js";
import cloudinary from "../config/cloudinary.js";

const getAllUsers = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while getting the properties", error: error.message });
    }
}

const getUserProperties = async (req, res) => {
    try {
        const properties = await Property.find({email: req.user.email})
        res.status(200).json(properties)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error while getting the properties", error: error.message });
    }
}

const addProperty = async (req, res) => {
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
        const property = new Property({...req.body, images: imagesUrl, floorPlan: floorPlanUrl, locationOnMap: locationOnMapUrl, email: req.user.email, phone: "01148770014"})
        await property.save();
        res.status(200).json({ message: "Property added successfully"});
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something wrong happened, Property wasn't added", error: error.message});
    }
}

const updateProperty = async (req, res) => {
    try {
        await Property.updateOne({...req.body});
        res.status(200).json({ message: "Property updated successfully" })
    } catch (error) {
        res.status(500).json({ message: "Something wrong happened while updating", error: error.message});
    }
}

const deleteProperty = async (req, res) => {
    try {
        await Property.deleteOne({id: req.body.id});
        res.status(200).json({message: "Property was deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Something wrong happened while deleteing", error: error.message})
    }
}

export {getAllUsers, addProperty, updateProperty, deleteProperty, getUserProperties}
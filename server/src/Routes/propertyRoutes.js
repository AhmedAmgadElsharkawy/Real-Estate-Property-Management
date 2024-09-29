import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    const price = req.body.price;
    const beds = req.body.beds;
    const baths = req.body.baths;
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

    console.log(price)
})

export {router as PropertyRouter};
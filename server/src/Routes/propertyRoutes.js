import express from "express";
import multer from "multer";
import { getAllUsers, addProperty, updateProperty, deleteProperty, getUserProperties } from "../controllers/propertyController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/get-all-properties", getAllUsers)

router.post("/add-property", authenticate, upload.any(), addProperty)

router.get("/get-user-properties", authenticate, getUserProperties)

router.patch("/update-property", authenticate, updateProperty)

router.delete("/delete-property", authenticate, deleteProperty)

export {router as PropertyRouter};
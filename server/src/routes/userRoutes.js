import express from "express";
import User from "../models/user";

const router = express.Router();

router.get("/",(req,res)=>{
    res.json("おはよう");
})

router.post("/login",(req,res)=>{
    const email = req.email
    const password = req.email
    try {
        
    } catch (error) {
        
    }
})

router.post("/register",(req,res)=>{
    
})

export {router as userRouter}
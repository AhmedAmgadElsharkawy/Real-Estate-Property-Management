import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.json("おはよう");
})

export {router as userRouter}
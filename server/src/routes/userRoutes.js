import express from "express";
import { signIn,signUp } from "../controllers/userController.js";

const router = express.Router();

router.get("/",(req,res)=>{
    res.json("おはよう");
})

router.post("/sign-in",signIn)

router.post("/sign-up",signUp)

export {router as userRouter}
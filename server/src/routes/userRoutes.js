import express from "express";
import { signIn,signUp } from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/",authenticate,(req,res)=>{
    // res.json(req.user);
})

router.post("/sign-in",signIn)

router.post("/sign-up",signUp)

export {router as userRouter}
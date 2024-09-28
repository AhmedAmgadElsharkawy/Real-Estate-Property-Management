import express from "express";
import { deleteUser, signIn, signUp, updateUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", authenticate, (req, res) => {
    // res.json(req.user);
})

router.post("/sign-in", signIn)

router.post("/sign-up", signUp)

router.patch("/update-user", authenticate, updateUser)

router.delete("/delete-user", authenticate, deleteUser)

export { router as userRouter }
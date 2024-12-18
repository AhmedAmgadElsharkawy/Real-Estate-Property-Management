import User from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { excludePassword } from "../utils/userUtils.js";

//node populates automatically the req and res objects to the cb function
const signUp = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password != confirmPassword)
        return res.status(409).json({ message: "passwords don't match" })

    try {
        const user = await User.findOne({ email });
        if (user)
            return res.status(409).json({ message: "email is already used" });
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS, 10));
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
}

const signIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const storedPassword = user.password
        const comparePasswords = await bcrypt.compare(password, storedPassword)
        if (!comparePasswords)
            return res.status(401).json({ message: 'Invalid password' });
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
        res.status(201).json({
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ email: req.user.email })
        res.status(200).json({ message: "successful user deletion" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        await User.updateOne({ email: req.user.email }, req.body)
        res.status(200).json({ message: "successful user update" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { signIn, signUp, deleteUser, updateUser }
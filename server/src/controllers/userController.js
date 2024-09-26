import User from "../models/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { excludePassword } from "../utils/userUtils";

//node populates automatically the req and res objects to the cb function
const signUp = async (req, res) => {
    const email = req.email;
    const password = req.password;
    const confirmPassword = req.confirmPassword;

    try {
        const DBResponse = await User.findOne({ email });
        if (DBResponse)
            return res.status(409).json({ message: "email is already used" });
        const hashedPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);
        const newUser = new User({ email, passord: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
}

const signIn = async (req, res) => {
    const email = req.email;
    const password = req.password
    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const storedPassword = user.password
        const comparePasswords = await bcrypt.compare(password, storedPassword)
        if (!comparePasswords)
            return res.status(401).json({ message: 'Invalid password' });
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET);
        const userWithoutPassword = excludePassword(user);
        res.json({
            user: userWithoutPassword,
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {signIn,signUp}
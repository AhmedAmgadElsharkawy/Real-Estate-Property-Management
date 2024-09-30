import jwt from "jsonwebtoken"
import User from "../models/user.js"

const authenticate = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    try {
        if(!token)
            return res.status(401).json({ message: 'No token provided' });
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        const user = await User.findOne({_id:decoded.id})
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message:error.message})
    }
}

export {authenticate}
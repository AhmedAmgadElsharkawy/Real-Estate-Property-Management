import jwt from "jsonwebtoken"

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    try {
        if(!token)
            return res.status(401).json({ message: 'No token provided' });
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        if(!verifyToken)
            return res.status(401).json({message:"innvalid token"})
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:error.message})
    }
}
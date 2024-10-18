import mongoose from "mongoose"
import env from "dotenv";

env.config()

const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.DB_URI)
       console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit the app if the connection fails
    }
}

export default connectDB;
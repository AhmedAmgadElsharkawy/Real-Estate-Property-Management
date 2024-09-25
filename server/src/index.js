import express from "express"
import cors from "cors"
import env from "dotenv"
import connectDB from "./config/db.js";


const app = express();
const port = 3000;
connectDB();

env.config()
app.use(cors())

app.listen((port)=>{
    console.log(`application started listenning on port ${port}`)
})
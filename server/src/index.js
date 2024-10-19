import express from "express"
import cors from "cors"
import env from "dotenv"
import connectDB from "./config/db.js";
import { userRouter } from "./routes/userRoutes.js";
import { PropertyRouter } from "./Routes/propertyRoutes.js";

env.config({ path: '../.env' });
connectDB();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/user",userRouter)
app.use("/property", PropertyRouter)


app.listen(port,()=>{
    console.log(`application started listenning on port ${port}`)
})
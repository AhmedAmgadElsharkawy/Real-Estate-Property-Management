import express from "express";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import env from "dotenv";
import cors from "cors";
import { PropertyRouter } from "./Routes/propertyRoutes.js";

env.config();
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use("/add",PropertyRouter);



app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
//          Second approach where db is setup in DB folder
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from "./app.js"


dotenv.config({
    path : "./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port ",process.env.PORT);
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection Failed!! ", err);
})




















//              FIRST Approach to connect DB in smae index file
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import { express } from "express";
const app = express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on Port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ",error)
        throw error
    }
})()
*/
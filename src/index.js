import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" }); // ✅ Correct file name is .env


connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Server error:", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection error", err);
})










// require("dotenv").config({path: "./.env"}) more improved version

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// import "dotenv/config"; // Automatically loads environment variables from .env file
/*
import express from "express";
const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
        app.on("error", (err) => {
            console.error("Server error:", err);        
            throw err;
        })
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/
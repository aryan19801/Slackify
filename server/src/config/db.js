import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log("Database is connected succesfully :", conn.connection.host);
    } catch (error) {
        console.log("Error in connecting with the database : ",error);
        process.exit(1);
    }
}
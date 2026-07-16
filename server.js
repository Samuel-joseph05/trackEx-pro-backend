

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expenseRoutes from "./routes/expenseRoutes.js";
import cors from "cors"
dotenv.config();

const app=express();


app.use(express.json());
app.use(cors())

app.use("/api",expenseRoutes)

//routes

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connected successfully");
})

const PORT=process.env.PORT || 5000;
app.listen( PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
   
}

)


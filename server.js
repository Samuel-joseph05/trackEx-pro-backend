

import express from "express";
import env from "dotenv";

env.config();

const app=express();


app.listen( process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
   
}

)

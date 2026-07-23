import { loginUser, userRegister } from "../controllers/userControllers.js";
import express from "express"



const router=express.Router()


//user register route
router.post("/register",userRegister)
router.post("/login",loginUser)
export  default router;
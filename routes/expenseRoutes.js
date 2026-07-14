import express from "express"
import { expenseRegister } from "../controllers/expenseControllers.js"



const router=express.Router()

router.post("/expenseRegister",expenseRegister)

export default router
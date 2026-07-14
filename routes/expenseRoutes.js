import express from "express"
import { deleteExpense, expenseRegister, getExpense, updateExpense, userRegister } from "../controllers/expenseControllers.js"




const router=express.Router()

//expense register route
router.post("/expenseRegister",expenseRegister)

//user register route
router.post("/register",userRegister)
router.get("/expenses",getExpense)
router.delete("/expense/:id",deleteExpense)
router.put("/expense/:id",updateExpense)


export default router;
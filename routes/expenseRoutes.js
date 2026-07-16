import express from "express"
import { deleteExpense, expenseRegister, getExpense, updateExpense, userRegister } from "../controllers/expenseControllers.js"




const router=express.Router()

//expense register route
router.post("/expenseRegister",expenseRegister)
router.get("/expenses",getExpense)
router.delete("/expense/:id",deleteExpense)
router.put("/expense/:id",updateExpense)

//user register route
router.post("/register",userRegister)




export default router;
import express from "express"
import { deleteExpense, expenseRegister, getDashboard, getExpense, getMonthlySummary, updateExpense } from "../controllers/expenseControllers.js"
import { verifyToken } from "../middleware/authmiddleware.js"





const router=express.Router()

//expense register route
router.post("/expense",verifyToken,expenseRegister)
router.get("/expenses",verifyToken,getExpense)
router.get("/dashboard",verifyToken,getDashboard)
router.get("/monthly-summary",verifyToken,getMonthlySummary)
router.delete("/expense/:id",verifyToken,deleteExpense)
router.put("/expense/:id",verifyToken,updateExpense)






export default router;
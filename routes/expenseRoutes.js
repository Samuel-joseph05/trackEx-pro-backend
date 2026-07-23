import express from "express"
import { deleteExpense, expenseRegister, getExpense, updateExpense } from "../controllers/expenseControllers.js"
import { verifyToken } from "../middleware/authmiddleware.js"





const router=express.Router()

//expense register route
router.post("/expense",verifyToken,expenseRegister)
router.get("/expenses",verifyToken,getExpense)
router.delete("/expense/:id",verifyToken,deleteExpense)
router.put("/expense/:id",verifyToken,updateExpense)






export default router;
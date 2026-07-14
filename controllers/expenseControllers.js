import { expenseService } from "../services/expenseServices.js";


export const expenseRegister=async(req,res)=>{
    try{
const {title,amount,cateory,date}=req.body;
const newExpense=await expenseService({title,amount,cateory,date});
return res.status(201).json({message:"Expense registered successfully",expense:newExpense})
    }
    catch(error){
          res.status(500).json({ message: "Server error" });
    }
}
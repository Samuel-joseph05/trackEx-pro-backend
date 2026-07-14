import Expense from "../models/Expense.js"


export const expenseService=async(expenseData)=>{
    return await Expense.create(expenseData);
}
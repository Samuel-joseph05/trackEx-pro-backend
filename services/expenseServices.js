import Expense from "../models/Expense.js";

//expense service used to register expense
export const expenseServiceRegister = async (expenseData) => {
  return await Expense.create(expenseData);
};

export const deleteExpenseService=async(id)=>{
  return await Expense.findByIdAndDelete(id)
}

export const getExpenseServive=async()=>{
  return await Expense.find()
}

export const updateExpenseService=async(id,expenseData) =>{
  return await Expense.findByIdAndUpdate(id,expenseData,{new:true})
}



import Expense from "../models/Expense.js";

//expense service used to register expense
export const expenseServiceRegister = async (expenseData) => {
  return await Expense.create(expenseData);
};

export const deleteExpenseService=async(id)=>{
  return await Expense.findByIdAndDelete(id)
}

export const getExpenseServive=async(userId)=>{
  return await Expense.find({user:userId})
}

export const updateExpenseService=async(id,userId,expenseData) =>{
  return await Expense.findByIdAndUpdate({ _id: id,user: userId},expenseData,{new:true})
}


import Expense from "../models/Expense.js";

//expense service used to register expense
export const expenseServiceRegister = async (expenseData) => {
  return await Expense.create(expenseData);
};

export const deleteExpenseService=async(id,userId)=>{
  return await Expense.findByIdAndDelete({ _id: id, user: userId })
}

export const getExpenseServive=async(userId)=>{
  return await Expense.find({user:userId})
}

export const updateExpenseService=async(id,userId,expenseData) =>{
  return await Expense.findByIdAndUpdate({ _id: id,user: userId},expenseData,{new:true})
}



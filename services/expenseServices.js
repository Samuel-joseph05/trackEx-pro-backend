import Expense from "../models/Expense.js";
import User from "../models/User.js";

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

//user service used to register user
export const userServiceRegister = async (userData) => {
  const { email, phone } = userData;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email already exists");
  }

  const existingPhone = await User.findOne({ phone });
  if (existingPhone) {
    throw new Error("Phone number already exists");
  }

  return await User.create(userData);
};

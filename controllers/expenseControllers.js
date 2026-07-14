import {
  deleteExpenseService,
  expenseServiceRegister,
  getExpenseServive,
  updateExpenseService,
  userServiceRegister,
} from "../services/expenseServices.js";

//expense register controller
export const expenseRegister = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    const newExpense = await expenseServiceRegister({
      title,
      amount,
      category,
      date,
    });
    return res
      .status(201)
      .json({
        message: "Expense registered successfully",
        expense: newExpense,
      });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//delete expense controller used to delete expense
export const deleteExpense=async(req,res)=>{
  try{
const {id}=req.params;
const deletedExpense=await deleteExpenseService(id)
if(!deletedExpense){
  return res.status(404).json({message:"Expense not found"})
}
return res.status(200).json({message:"expense deleted ",deletedExpense})

  }
  catch(err){
    return res.status(500).json({message:"server error"})

  }
}

//get expense controller used to get expense
export const getExpense=async(req,res)=>{
  try{
const expenses=await getExpenseServive()
return res.status(200).json(expenses)
  }
  catch{

  }
}

//update expense controller used to update expense
export const updateExpense=async(req,res)=>{
  try{
const {id}=req.params;
const updatedExpense=await updateExpenseService(id,req.body)
console.log(updatedExpense)
if(!updatedExpense)
  return res.status(404).json({message:" expense not found"})
  return res.status(200).json(updatedExpense)
  }
catch(err){
return res.status(500).json({message:"server error",err})
  }
}

//user register controller
export const userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Required fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const newUser = await userServiceRegister({ name, email, phone, password });
    console.log(newUser);
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } 
  catch (err) {
   
    if (
      err.message === "Email already exists" ||
      err.message === "Phone number already exists"
    ) {
      return res.status(409).json({
        message: err.message,
      });
    }
    return res.status(500).json({ message: err.message });
  }
};

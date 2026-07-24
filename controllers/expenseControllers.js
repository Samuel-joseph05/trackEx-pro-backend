import {
  deleteExpenseService,
  expenseServiceRegister,
  getExpenseServive,
  updateExpenseService,
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
      user: req.user.id, // Logged-in user's ID
    });
    return res
      .status(201)
      .json({
        message: "Expense registered successfully",
        expense: newExpense,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message});
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
const expenses=await getExpenseServive(req.user.id)
console.log(req.user);//new line
return res.status(200).json(expenses)
  }
  catch(err){
return res.status(500).json({message:err.message})
  }
}

//update expense controller used to update expense
export const updateExpense=async(req,res)=>{
  try{
const {id}=req.params;
const updatedExpense=await updateExpenseService(id,req.user._id,req.body)
console.log(updatedExpense)
if(!updatedExpense)
  return res.status(404).json({message:" expense not found"})
  return res.status(200).json(updatedExpense)
  }
catch(err){
return res.status(500).json({message:"server error",err})
  }
}



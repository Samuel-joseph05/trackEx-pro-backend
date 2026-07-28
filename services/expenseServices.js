import Expense from "../models/Expense.js";

//expense service used to register expense
export const expenseServiceRegister = async (expenseData) => {
  return await Expense.create(expenseData);
};

export const deleteExpenseService=async(id,userId)=>{
  return await Expense.findByIdAndDelete({ _id: id, user: userId })
}

export const getExpenseServive=async(userId,search,category)=>{

  const query ={user: userId}

  if(search){
    query.title={
      $regex:search,
      $options: "i",
    }
  }
  if(category && category !== "All"){
    query.category=category;
  }
  return await Expense.find(query)
}

export const updateExpenseService=async(id,userId,expenseData) =>{
  return await Expense.findByIdAndUpdate({ _id: id,user: userId},expenseData,{new:true})
}

export const getDashboardExpenseService = async (userId) => {
  const expenses = await Expense.find({ user: userId });

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const thisMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const thisMonthTotal = thisMonthExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return {
    expenses,
    totalExpenses: expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    ),
    thisMonthExpenses: thisMonthTotal,
    totalTransaction: expenses.length,
    categories: new Set(
      expenses.map((expense) => expense.category)
    ).size,
  };
};


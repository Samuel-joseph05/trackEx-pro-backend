import Expense from "../models/Expense.js";

//expense service used to register expense
export const expenseServiceRegister = async (expenseData) => {
  return await Expense.create(expenseData);
};

export const deleteExpenseService=async(id,userId)=>{
  return await Expense.findByIdAndDelete({ _id: id, user: userId })
}

export const getExpenseServive=async(userId,search,category,sort,page)=>{

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


   let sortOption = {};
   
   switch (sort) {
    case "newest":
      sortOption = { date: -1 };
      break;

    case "oldest":
      sortOption = { date: 1 };
      break;

    case "highest":
      sortOption = { amount: -1 };
      break;

    case "lowest":
      sortOption = { amount: 1 };
      break;

    case "az":
      sortOption = { title: 1 };
      break;

    case "za":
      sortOption = { title: -1 };
      break;

    default:
      sortOption = { date: -1 };
  }

const limit=6
const currentPage=Number(page) || 1;
const skip=(currentPage - 1 ) * limit;

const totalExpenses=await Expense.countDocuments(query)
const totalPages=Math.ceil(totalExpenses / limit)

  const expenses = await Expense.find(query).sort(sortOption).skip(skip).limit(limit);
  return {
  expenses,
  currentPage,
  totalPages,
  totalExpenses,
};
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


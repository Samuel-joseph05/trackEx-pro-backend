import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const getMonthlySummaryService = async (userId) => {
  return await Expense.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $group: {
        _id: {
          year: { $year: "$date"},
           month: { $month: "$date"},
         },
         total: { $sum: "$amount"},
      },
    },
    {
        $sort:{
            "_id.year": -1,
            "_id.month": -1,
        }
    },
{
  $project: {
    _id: 0,
    year: "$_id.year",
    month: {
      $arrayElemAt: [
        [
          "",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "$_id.month"
      ]
    },
    total: 1,
  },
}
  ]);
};

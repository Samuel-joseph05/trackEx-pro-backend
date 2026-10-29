
import Salary from "../models/Salary.js";

export const getSalaryService = async (userId, month, year) => {
  return await Salary.findOne({
    user: userId,
    month,
    year,
  });
};

export const saveSalaryService = async (
  userId,
  month,
  year,
  amount
) => {
  return await Salary.findOneAndUpdate(
    {
      user: userId,
      month,
      year,
    },
    {
      $set: { amount },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }
  );
};

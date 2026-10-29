
import {
  getSalaryService,
  saveSalaryService,
} from "../services/salaryServices.js";

const isValidMonthYear = (month, year) =>
  Number.isInteger(month) &&
  month >= 1 &&
  month <= 12 &&
  Number.isInteger(year) &&
  year >= 2000 &&
  year <= 9999;

// GET /api/salary?month=10&year=2026
export const getSalary = async (req, res) => {
  try {
    const now = new Date();

    const month =
      req.query.month === undefined
        ? now.getMonth() + 1
        : Number(req.query.month);

    const year =
      req.query.year === undefined
        ? now.getFullYear()
        : Number(req.query.year);

    if (!isValidMonthYear(month, year)) {
      return res.status(400).json({
        message: "Invalid month or year",
      });
    }

    const salary = await getSalaryService(
      req.user.id,
      month,
      year
    );

    return res.status(200).json({ salary });
  } catch (error) {
    console.error("Get salary error:", error);

    return res.status(500).json({
      message: "Failed to fetch salary",
    });
  }
};

// PUT /api/salary
export const saveSalary = async (req, res) => {
  try {
    const month = Number(req.body.month);
    const year = Number(req.body.year);
    const amount = Number(req.body.amount);

    if (
      !isValidMonthYear(month, year) ||
      req.body.amount === undefined ||
      req.body.amount === null ||
      req.body.amount === "" ||
      !Number.isFinite(amount) ||
      amount < 0
    ) {
      return res.status(400).json({
        message: "Provide a valid month, year, and salary amount",
      });
    }

    const salary = await saveSalaryService(
      req.user.id,
      month,
      year,
      amount
    );

    return res.status(200).json({
      message: "Salary saved successfully",
      salary,
    });
  } catch (error) {
    console.error("Save salary error:", error);

    return res.status(500).json({
      message: "Failed to save salary",
    });
  }
};

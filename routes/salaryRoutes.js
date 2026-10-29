
import express from "express";
import {
  getSalary,
  saveSalary,
} from "../controllers/salaryControllers.js";
import { verifyToken } from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/salary", verifyToken, getSalary);
router.put("/salary", verifyToken, saveSalary);

export default router;

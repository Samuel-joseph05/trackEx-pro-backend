import express from "express";
import cors from "cors";

import expenseRoutes from "./routes/expenseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to TrackEx API");
});

app.use("/api", expenseRoutes);
app.use("/api", userRoutes);
app.use("/api", salaryRoutes);

export default app;
import express from "express";
import cors from "cors";

import expenseRoutes from "./routes/expenseRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://track-ex-pro.vercel.app"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to TrackEx API");
});

app.use("/api", expenseRoutes);
app.use("/api", userRoutes);

export default app;
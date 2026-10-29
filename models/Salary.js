
import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    month: {
      type: Number,
      required: true,
      min: 1,
      max: 12,
    },

    year: {
      type: Number,
      required: true,
      min: 2000,
      max: 9999,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// One salary record per user, per month and year.
salarySchema.index(
  { user: 1, year: 1, month: 1 },
  { unique: true }
);

export default mongoose.model("Salary", salarySchema);


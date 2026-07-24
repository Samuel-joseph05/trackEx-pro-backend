import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Name is required"],
    trim:true,
    minlength:[3,"Name must be at least 3 characters"]
  },
  
  email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
    lowercase:true,
    trim:true,
      match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid email format",
    ],
  },

  phone: {
    type: String,
    required: [true,"Phone number is required"],
    unique: true,
  match: [/^\d{10}$/, "Phone number must be 10 digits"],
  },

  password: {
    type:String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
  },
});

export default mongoose.model("User",userSchema)
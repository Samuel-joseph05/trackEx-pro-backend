import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//user service used to register user
export const userServiceRegister = async (userData) => {
  const { email, phone ,password} = userData;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    throw new Error("Email already exists");
  }

  const existingPhone = await User.findOne({ phone });
  if (existingPhone) {
    throw new Error("Phone number already exists");
  }

  //hash the pssword before saving to the database
const hashedPassword=await bcrypt.hash(password,10)
  // Create user
  const newUser = await User.create({
    ...userData,
    password: hashedPassword,
    role: "user", // optional
  });
  
  return {
  id: newUser._id,
  name: newUser.name,
  email: newUser.email,
  phone: newUser.phone,
};
};

export const userServiceLogin = async (userData) => {
  const { phone, password } = userData;

  const user = await User.findOne({ phone });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid phone or password");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "1h",});

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  };
};

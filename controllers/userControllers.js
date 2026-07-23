import {
  userServiceLogin,
  userServiceRegister,
} from "../services/userServices.js";

//user register controller
export const userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Required fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Password validation
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const newUser = await userServiceRegister({ name, email, phone, password });
    // console.log(newUser);
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    if (
      err.message === "Email already exists" ||
      err.message === "Phone number already exists"
    ) {
      return res.status(409).json({
        message: err.message,
      });
    }
    return res.status(500).json({ message: err.message });
  }
};



export const loginUser = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ sucess: false, message: "Phone and password are required" });
    }
    //call the service
    const result = await userServiceLogin({ phone, password });

    return res.status(200).json({ success: true, message: "Login successfully", token: result.token, user: result.user });
  } catch (error) {
    // Handle specific errors
    if (
      error.message === "User not found" ||
      error.message === "Invalid phone or password"
    ) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    // Handle other errors
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

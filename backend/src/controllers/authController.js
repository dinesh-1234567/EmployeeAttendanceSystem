const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, employeeId, department, role } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.json({ message: "Email already registered" });

    const user = await User.create({
      name,
      email,
      password,
      employeeId,
      department,
      role,
    });

    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

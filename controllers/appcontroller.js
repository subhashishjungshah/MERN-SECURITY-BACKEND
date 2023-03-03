const UserModel = require("../Model/Usermodel");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const register = async (req, res) => {
  try {
    const { username, password, profile, email } = req.body;
    // check whether user exists or not
    const existUsername = await UserModel.findOne({ username });
    const existEmail = await UserModel.findOne({ email });
    if (existUsername || existEmail)
      res.status(500).json({ message: "User already exists" });
    else {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const encryptpassword = await bcrypt.hash(password, salt);
        const user = await UserModel.create({
          username,
          password: encryptpassword,
          profile,
          email,
        });
        res.status(200).send("User Created");
      } else {
        res.status(500).send({ message: "error" });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const login = async (req, res) => {};
const getUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const generateOTP = async (req, res) => {
  const OTP = await otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
};
const verifyOTP = async (req, res) => {};
const createResetSession = async (req, res) => {};
const resetPassword = async (req, res) => {};

module.exports = {
  register,
  login,
  getUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};

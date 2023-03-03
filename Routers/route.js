const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
} = require("../controllers/appcontroller");
//POST routes
router.route("/register").post(register);
router.route("/registerMail").post(); //send email
router.route("/authenticate").post(); // authenticate user
router.route("/login").post(login); // login

// GET methods
router.route("/user/:username").get(getUser); // user with username
router.route("/generateOTP").get(generateOTP); // generate random OTP
router.route("/verifyOTP").get(verifyOTP); // verify generated OTP
router.route("/createResetSession").get(createResetSession); // reset all variables

//PUT method
router.route("/updateuser").put(updateUser);
router.route("/resetpassword").put(resetPassword);

module.exports = router;

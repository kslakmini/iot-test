const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const {
  LoginSchema,
} = require("../validations/UserRegValidation");
const checkAuth = require("../middleware/auth");
const { getToken } = require("../utils/getToken");
const { validateInput } = require("../utils/common-functions");


router.post("/login", async (req, res) => {
  try {
    const checkValidation = validateInput(LoginSchema, req.body);
    if (!checkValidation.value) {
      return res.status(403).json("Please check your email and password");
    }
    const validUser = await User.findOne({
      email: checkValidation.value.email,
    });
    if (!validUser) {
      return res.status(401).json("Email is not correct!");
    }
    const validPassword = await bcrypt.compare(
      checkValidation.value.password,
      validUser.password
    );
    if (!validPassword) {
      return res.status(401).json("Password is not correct!");
    }

    const accessToken = getToken(validUser.id, process.env.JWT_KEY, "8h");
    const refreshToken = getToken(validUser.id, process.env.REFRESH_KEY, "90d");
    validUser.refreshTokens.push(refreshToken);
    User.findOneAndUpdate({
      email: validUser.email,
      lastLoginDate: Date.now(),
      new: true,
    });
    await validUser.save();
    return res.status(200).json({
      accessToken,
      refreshToken,
      user: {
        id: validUser._id,
        firstName: validUser.firstName,
        lastName: validUser.lastName,
        email: validUser.email,
        phoneNumber: validUser.phoneNumber,
        role: validUser.role,
      },
    });
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.post("/change-password", checkAuth, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (oldPassword === newPassword) {
      return res
        .status(401)
        .json({ message: "Old password and new password are same" });
    }
    const AuthUserData = await User.findById(req.user.userId);
    if (AuthUserData.status !== "active") {
      return res
        .status(503)
        .json("User not active, please contact administrator");
    }
    const passwordHash = await bcrypt.compare(
      oldPassword,
      AuthUserData.password
    );
    if (!passwordHash) {
      return res.status(401).json({ message: "Old password is invalid." });
    }
    const salt = await bcrypt.genSalt(10);
    const newHashedPassword = await bcrypt.hash(newPassword, salt);
    await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        password: newHashedPassword,
      }
    );
    return res.status(200).json({ message: "Password updated successfully!" });
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/client-validate-user", checkAuth, async (req, res) => {
  try {
    const AuthUserData = await User.findById(
      req.user.userId,
      "role title firstName lastName jobTitle email phoneNumber password status profileImage"
    ); // Get logged user data

    return res.status(200).json(AuthUserData);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;

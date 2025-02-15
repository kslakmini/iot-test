const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Product = require("../models/Product");
const { ProductInitialSchema } = require("../validations/ProductValidation");
const checkAuth = require("../middleware/auth");
const { getToken } = require("../utils/getToken");
const { validateInput } = require("../utils/common-functions");


router.post("/", async (req, res) => {
  try {
    const validInput = validateInput(ProductInitialSchema, req.body);
    if (!validInput.value) {
      return res.status(403).json(validInput);
    }
    const { name, price } = validInput.value;

    const newProductmeta = new Product({
      name,
      price,
    });
    await newProductmeta.save();
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.put("/status/:id", async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const validInput = validateInput(ProductInitialSchema, req.body);
    if (!validInput.value) {
      return res.status(403).json(validInput);
    }

    const { name, price } = validInput.value;

    const update = {
      name,
      price,
    };

    await Product.findByIdAndUpdate({ _id: req.params.id }, update);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/:id", checkAuth, async (req, res) => {
  try {
    const AuthUserData = await User.findById(req.user.userId);
    if (AuthUserData.role !== "company-manager") {
      return res.sendStatus(401);
    }
    const data = await Product.findById(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Product.find().sort({ updatedAt: -1 });
    return res.status(200).json(data);
  } catch (error) {
    return res.sendStatus(500);
  }
});

module.exports = router;

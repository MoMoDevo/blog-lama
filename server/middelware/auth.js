const jwt=require("jsonwebtoken")
const User=require("../models/userModel")

exports.requireSignin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
    "123456"
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send("Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
const express = require("express");
const { userSignUp } = require("../controllers/user/userSignUp");

const router = express.Router();
router.post("/signup",userSignUp)
module.exports = router;

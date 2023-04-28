const express = require("express");
const { userSignUp } = require("../controllers/user/userSignUp");
const { userLogin } = require("../controllers/user/userLogin");

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

module.exports = router;

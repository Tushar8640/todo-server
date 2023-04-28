const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../../services/user.services");
const dotenv = require("dotenv").config();

exports.userLogin = async (req, res) => {
  try {
    const user = await getUserByEmail(req?.body?.email);
    console.log(req.body);
    if (!user) {
      return res.status(200).json({
        status: false,
        message: "User Not Found",
      });
    } else {
      const passwordMatch = await user.validatePassword(req?.body?.password);
      console.log(passwordMatch);
      if (passwordMatch) {
        var token = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_KEY,
          {
            expiresIn: "8h",
          }
        );
        const { password, ...responseUser } = user._doc;
        return res.status(200).json({
          status: true,
          token: token,
          user: responseUser,
        });
      } else {
        return res.status(200).json({
          status: false,
          message: "Incorrect Email/Password",
        });
      }
    }
  } catch (err) {
    console.log("Error in authenticateUser :::::::::::");
    console.log(err);
    return res.status(500).json({
      status: false,
      message: "There was an error occured!",
    });
  }
};

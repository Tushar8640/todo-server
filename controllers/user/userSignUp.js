const { getUserByEmail, addUser } = require("../../services/user.services");

exports.userSignUp = async (req, res) => {
  try {
    const data = req.body;
    // check user is exist
    const checkUser = await getUserByEmail(data?.email);
    if (checkUser) {
      return res.status(200).json({
        status: false,
        message: "Email is already taken",
      });
    }
    const user = await addUser(data);
    if (user) {
      console.log(user);
      res.status(200).json({
        status: "success",
        message: "User added Successfully",
        user: user,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to create new user",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

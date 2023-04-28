const User = require("../models/user.model");

// get user by email
exports.addUser = async (data) => {
  try {
    const user = await User.create(data);
    if (user) {
      const { password, ...responseUser } = user._doc;
      return { user: responseUser };
    }
  } catch (error) {
    console.log(error);
  }
};
// get user by email
exports.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

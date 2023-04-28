const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = async () => {
  try {
    //   database connected with mongoose ODM
    const result = await mongoose.connect(process.env.DATABASE_LOCAL);

    console.log("<-----Db successfully connected------->");

    return result;

  } catch (error) {

    console.log(error);
    
    return error;
  }
};

module.exports = db;
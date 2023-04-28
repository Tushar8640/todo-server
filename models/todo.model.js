const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: [
      {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
      },
    ],
    description: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;

const mongoose = require("mongoose");
const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
    category: [
      {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
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

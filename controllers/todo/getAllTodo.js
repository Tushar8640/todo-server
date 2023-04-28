const { getAllTodoServices } = require("../../services/todo.services");

exports.getAllTodoController = async (req, res) => {
  try {
    const todos = await getAllTodoServices();
    if (todos) {
      res.status(200).json({
        status: "success",
        todos: todos,
      });
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to get todos ",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

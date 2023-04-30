const { getUsersTodoServices } = require("../../services/todo.services");

exports.getTodosByUserController = async (req, res) => {
  try {
    const { email } = req?.params;
    console.log(req?.query);
    const { title, category } = req.query;

    console.log(category);
    const todos = await getUsersTodoServices(email, title, category);
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

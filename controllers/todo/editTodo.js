const { editTodoServices, getTodoById } = require("../../services/todo.services");

exports.editTodoController = async (req, res) => {
  try {
    const data = req?.body;
    const {id} = req?.params;
    const result = await editTodoServices(id,data);
    if (result?.modifiedCount === 1) {
        const todo = await getTodoById(id);
        return res.status(200).json({
          status: "success",
          message: "Todo Successfully updated",
          todo,
        });
      }
      if (result?.modifiedCount !== 1) {
        return res.status(400).json({
          status: "Fail",
          message: "Article can not updated ",
          todo: result,
        });
      }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

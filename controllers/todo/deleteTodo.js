const { deleteTodoServices } = require("../../services/todo.services");

exports.deleteTodoController = async (req, res) => {
  try {
    const id = req?.params;
    const todo = await deleteTodoServices(id);
    if (todo?.deletedCount !== 0) {
      return res.status(200).json({
        status: "success",
        message: "todo Successfully deleted",
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "todo can't deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

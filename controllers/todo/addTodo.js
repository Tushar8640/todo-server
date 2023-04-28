const { addTodoServices } = require("../../services/todo.services");

exports.addTodoController =async ( req,res)=>{
    try {
        const data = req?.body;
  
        const todo = await addTodoServices(data);
        console.log("todo---->", req.body);
        if (todo) {
          res.status(200).json({
            status: "success",
            message: "todo added Successfully",
            todo: todo,
          });
        } else {
          res.status(200).json({
            status: "failed",
            message: "Unable to add todo ",
          });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
          status: "failed",
          message: error.message,
        });
    }
}
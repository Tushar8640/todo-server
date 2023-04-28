const express = require("express");
const { addTodoController } = require("../controllers/todo/addTodo");
const { deleteTodoController } = require("../controllers/todo/deleteTodo");
const { getAllTodoController } = require("../controllers/todo/getAllTodo");
const { editTodoController } = require("../controllers/todo/editTodo");
const { getTodosByUserController } = require("../controllers/todo/getTodosByUser");

const router = express.Router();

router.post("/addtodo", addTodoController);
router.delete("/deletetodo/:id", deleteTodoController);
router.get("/alltodos", getAllTodoController);
router.get("/todos/:email", getTodosByUserController);
router.patch("/edittodo/:id", editTodoController);

module.exports = router;

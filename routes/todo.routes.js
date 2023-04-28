const express = require("express")
const { addTodoController } = require("../controllers/todo/addTodo")

const router= express.Router()

router.post("/addtodo",addTodoController)

module.exports = router
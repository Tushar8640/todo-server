const Todo = require("../models/todo.model");

exports.addTodoServices=async(data)=>{
    const todo = await Todo.create(data);
    await todo.save({validateBeforeSave: true});
    return todo
}
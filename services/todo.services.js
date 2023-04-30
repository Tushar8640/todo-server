const Todo = require("../models/todo.model");

// add todo
exports.addTodoServices = async (data) => {
  const todo = await Todo.create(data);
  await todo.save({ validateBeforeSave: true });
  return todo;
};

// delete todo
exports.deleteTodoServices = async ({ id }) => {
  try {
    console.log(id);
    const todo = await Todo.findByIdAndDelete({ _id: id });

    return todo;
  } catch (error) {
    console.log(error.message);
  }
};

// get all todo
exports.getAllTodoServices = async () => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return todos;
  } catch (error) {
    console.log(error);
  }
};
// get all todo
exports.getTodoById = async (id) => {
  try {
    const todo = await Todo.findById({ _id: id });
    return todo;
  } catch (error) {
    console.log(error);
  }
};
// get all todo
exports.getUsersTodoServices = async (email, titles, categories) => {
  try {
    console.log(email, titles, categories);
    const filter = {};

    if (email) {
      filter["user.email"] = email;
    }

    if (categories) {
      const category = categories.split(",");
console.log(category);
      filter.category = { $elemMatch: { name: { $in: category } } };
    }

    if (titles) {
      const title = new RegExp(titles, "i");
      filter.title = title;
    }
    const todo = await Todo.find(filter).sort({ createdAt: -1 });
    return todo;
  } catch (error) {
    console.log(error);
  }
};
// edit todo
exports.editTodoServices = async (id, data) => {
  try {
    const existingTodo = await Todo.findOne({ _id: id });
    console.log(existingTodo, data);
    if (existingTodo) {
      const result = await Todo.updateOne({ _id: id }, data, {
        runValidators: true,
      });

      return result;
    } else {
      return existingTodo;
    }
  } catch (error) {
    console.log(error);
  }
};

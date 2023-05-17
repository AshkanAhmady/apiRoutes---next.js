import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { todoId } = req.query;

  if (req.method === "GET") {
    const todo = await getOneTodo(todoId);
    return res.status(200).json({ todo });
  } else if (req.method === "DELETE") {
    await Todo.findByIdAndDelete(todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ message: "todo deleted", todos });
  } else if (req.method === "PUT") {
    const todo = await Todo.findById(todoId);
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.isCompleted = req.body.isCompleted;

    await todo.save();
    const todos = await Todo.find({});
    return res.status(200).json({ message: "todo edited", todos });
  }
}

export async function getOneTodo(todoId) {
  const todo = await Todo.findById(todoId);
  return todo;
}

import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todo";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  if (method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  } else if (method === "POST") {
    await Todo.create({
      title: body.title,
      description: body.description,
    });
    const todos = await Todo.find({});

    return res.status(201).json({ message: "new todo added!", todos });
  }
}

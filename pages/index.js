// import NewTodo from "../Components/NewTodo";
// import TodoList from "../Components/TodosList";
import axios from "axios";
import { useState } from "react";
import Todo from "../server/models/todo";
import dbConnect from "../server/utils/dbConnect";

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState(data);

  // useEffect(() => {
  //   axios
  //     .get("/api/todos")
  //     .then((res) => {
  //       setLoading(false);
  //       setTodos(res.data.todos);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //client side data fetching
  const deleteHandler = (id) => {
    setLoading(true);
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodoHandler = (newTodo) => {
    setLoading(true);
    axios
      .post(`/api/todos/`, newTodo)
      .then(({ data }) => {
        setTodos(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const toggleComplete = (todoId) => {
    axios
      .put(`/api/todos/complete/${todoId}`)
      .then(({ data }) => {
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className=" flex justify-center w-full p-5">
      <div className="w-full p-4 flex flex-col gap-2 md:flex-row md:justify-center justify-cent items-start">
        {/* <NewTodo onAdd={addTodoHandler} />
        <TodoList
          toggleComplete={toggleComplete}
          onDelete={deleteHandler}
          loading={loading}
          todos={todos}
        /> */}
      </div>
    </main>
  );
}

// server side pre-rendering
export async function getServerSideProps(context) {
  dbConnect();
  const todos = await Todo.find({});
  return {
    props: {
      data: JSON.parse(JSON.stringify(todos)),
    },
  };
}

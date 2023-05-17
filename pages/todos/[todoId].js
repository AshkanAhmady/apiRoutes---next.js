import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import dbConnect from "../../server/utils/dbConnect";
import { getOneTodo } from "../api/todos/[todoId]";

const SingleTodoPage = ({ todo }) => {
  // we can get data like this or use (getServerSideProps)
  // const router = useRouter();
  // const { todoId } = router.query;

  // useEffect(() => {
  //   if (todoId) {
  //     axios
  //       .get(`/api/todos/${todoId}`)
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }
  // }, [todoId]);

  return (
    <div>
      <h1 className="font-bold text-2xl">todo ddescription</h1>
      <h2 className="font-bold text-md">{todo.title}</h2>
      <p>{todo.description}</p>
      <span>{todo.isCompleted ? "Completed" : "not Completed"}</span>
    </div>
  );
};

export default SingleTodoPage;

export async function getServerSideProps(context) {
  const { query } = context;
  // if our backEnd is writen in next, we dont use axios in here
  //here we can write the backEnd codes
  dbConnect()
  const todo = await getOneTodo(query.todoId);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

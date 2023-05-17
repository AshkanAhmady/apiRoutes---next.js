import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { getOneTodo } from "../../api/todos/[todoId]";

const EditTodo = ({ todo }) => {
  const [edit, setEdit] = useState(todo);
  const [checked, setChecked] = useState(todo.isCompleted);
  const router = useRouter();

  const changeHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${router.query.todoId}`, {
        ...edit,
        isCompleted: checked,
      })
      .then(() => router.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-50 mt-3 w-full flex flex-col items-center">
      <h1 className="text-2xl py-3">Edit Todo Page</h1>
      <form className="bg-white rounded-xl shadow-lg flex flex-col w-full md:w-[40%] p-3">
        <label className="text-stone-500 font-medium" htmlFor="title">
          Title
        </label>
        <input
          placeholder="todo title..."
          className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mb-5 mt-1"
          onChange={(e) => changeHandler(e)}
          name="title"
          type="text"
          value={edit.title}
          id="title"
        />
        <label className="text-stone-500 font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          placeholder="todo description..."
          className="bg-transparent placeholder:text-stone-400 outline-none border border-stone-300 rounded px-2 py-1 mb-5 mt-1"
          id="description"
          onChange={(e) => changeHandler(e)}
          name="description"
          value={edit.description}
          cols="20"
          rows="3"
        ></textarea>
        <div className="flex gap-2 mb-4">
          <span>Complete:</span>
          <input
            className="mt-1"
            type="checkbox"
            name="isCompleted"
            onChange={(e) => setChecked(!checked)}
            checked={checked}
          />
        </div>
        <div className="w-full flex gap-4">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="bg-transparent flex-auto text-blue-600 border border-blue-600 px-7 py-1 rounded-md"
          >
            Cancel
          </button>
          <input
            onClick={submitHandler}
            className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTodo;

export async function getServerSideProps(context) {
  const { query } = context;
  const todo = await getOneTodo(query.todoId);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}

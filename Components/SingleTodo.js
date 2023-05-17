import {
  CheckIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const SingleTodo = ({ todo, onDelete, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl">
      <span className={`${todo.isCompleted ? "line-through" : ""}`}>
        <Link href={`/todos/${todo._id}`}>{todo.title}</Link>
      </span>
      <div className="flex gap-x-3 items-center">
        <button onClick={() => toggleComplete(todo._id)}>
          {todo.isCompleted ? (
            <CheckIcon className="w-6 h-6 stroke-green-400" />
          ) : (
            <div className="border border-gray-600 rounded-full w-4 h-4"></div>
          )}
        </button>
        <button>
          <TrashIcon
            onClick={() => onDelete(todo._id)}
            className="w-6 h-6 stroke-red-400"
          />
        </button>
        <button>
          <Link href={`/todos/edit/${todo._id}`}>
            <PencilSquareIcon className="w-6 h-6 stroke-blue-400" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;

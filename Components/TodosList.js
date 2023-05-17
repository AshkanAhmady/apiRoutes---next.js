import SingleTodo from "./SingleTodo";

const TodoList = ({ onDelete, todos, loading, toggleComplete }) => {
  return (
    <div className="w-full max-w-screen-md bg-white p-2 md:p-4 shadow-lg rounded-xl">
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : !todos.length ? (
        <h1 className="font-bold text-center">insert new todo</h1>
      ) : (
        todos.map((todo) => {
          return <SingleTodo toggleComplete={toggleComplete} key={todo._id} todo={todo} onDelete={onDelete} />;
        })
      )}
    </div>
  );
};

export default TodoList;

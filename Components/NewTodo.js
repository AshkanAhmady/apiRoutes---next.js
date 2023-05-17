import { useState } from "react";

const NewTodo = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <>
      {showForm === false && (
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-7 py-1 w-full md:w-[unset] rounded-md"
        >
          New Todo
        </button>
      )}
      {showForm === true && (
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
            value={formData.title}
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
            value={formData.description}
            cols="20"
            rows="3"
          ></textarea>
          <div className="w-full flex gap-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-transparent flex-auto text-blue-600 border border-blue-600 px-7 py-1 rounded-md"
            >
              Cancel
            </button>
            <input
              onClick={submitHandler}
              className="bg-blue-600 cursor-pointer flex-auto text-white px-7 py-1 rounded-md"
              type="submit"
            />
          </div>
        </form>
      )}
    </>
  );
};

export default NewTodo;

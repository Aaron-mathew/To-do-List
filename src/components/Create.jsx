/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
    const tasks = props.tasks;
    const settasks = props.settasks;
    const [title, setTitle] = useState("");

    const SubmitHandler = (e) => {
      e.preventDefault();
      const newtodo = { id: nanoid(), title, complete: false};

      settasks([...tasks, newtodo]);
      setTitle("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
    };
  return (
    <form onSubmit={SubmitHandler}>
    <div className="flex mb-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="flex-1 border-b-2 border-yellow-500 py-1 px-2 mr-2 focus:outline-none bg-transparent placeholder-yellow-500"
        placeholder="Add a new task"
      />
      <button className="py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
        Add
      </button>
    </div>
  </form>
  )
}

export default Create
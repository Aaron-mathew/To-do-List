import { useState } from 'react';
import { nanoid } from "nanoid";
import { RiEditFill, RiCloseLargeLine } from '@remixicon/react';

const TodoListUI = () => {

  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = { id: nanoid(), title, complete: false};
    console.log(newtodo);

    settasks([...tasks, newtodo]);
    settitle("");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
  };
  console.log(tasks);

  const CompleteHandler = (index) => {
    console.log(index);
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    settasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
  };

  const deleteHandler = (index) => {
    const copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    settasks(copyTasks);
    localStorage.setItem("tasks", JSON.stringify(copyTasks));
  };

  const backgroundImageStyle = {
    backgroundImage: `url('https://i.pinimg.com/564x/b7/05/fc/b705fc60f36cbc3dc20a277e6033a952.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  return (
    <div className="relative">
      <div className="fixed inset-0" style={backgroundImageStyle}></div>
      <div className="bg-black opacity-55 fixed inset-0"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white w-full">
        <div className="bg-red-900 rounded-full h-36 w-36 flex items-center justify-center mx-auto mb-9 mt-5 border">
          <h1 className="text-7xl font-bold">{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <div className="max-w-md mx-auto p-4 bg-red-900 bg-opacity-90 text-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">To-Do List</h2>
            <div className="flex mb-4">
              <input
                onChange={(e) => settitle(e.target.value)} value={title}
                type="text"
                className="flex-1 border-b-2 border-yellow-500 py-1 px-2 mr-2 focus:outline-none bg-transparent placeholder-yellow-500"
                placeholder="Add a new task"
              />
              <button className="py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
                Add
              </button>
            </div>
            <ul>
              {tasks.length > 0 ? ( tasks.map((task, index) => {
                return(
                  <li key={task.id} className="flex items-center py-2">
                  <div onClick={() => CompleteHandler(index)} className= {`${task.completed ? "bg-green-600" : "border"} mr-4 rounded-full w-[30px] h-[30px]  border-yellow-500`}></div>
                  <div className="flex justify-between items-center w-full">
                    <span className={`${task.completed ? "line-through" : ""} text-lg font-semibold`}>{task.title}</span>
                    <div>
                      <button className="text-yellow-500 hover:text-yellow-600 focus:outline-none mr-2">
                        <RiEditFill />
                      </button>
                      <button onClick={() => deleteHandler(index)} className="text-red-500 hover:text-red-600 focus:outline-none">
                        <RiCloseLargeLine />
                      </button>
                    </div>
                  </div>
                </li>
                );
              })) : (
                <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
                No Pending Tasks
                </h1>
              )}

              {/* <li className="flex items-center py-2">
                <div className={`bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}></div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg line-through font-semibold">Find One Piece</span>
                  <div>
                    <button className="text-yellow-500 hover:text-yellow-600 focus:outline-none mr-2">
                      <RiEditFill />
                    </button>
                    <button className="text-red-500 hover:text-red-600 focus:outline-none">
                      <RiCloseLargeLine />
                    </button>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoListUI;

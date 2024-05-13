/* eslint-disable react/prop-types */

import { RiEditFill, RiCloseLargeLine } from '@remixicon/react';


const Show = (props) => {
    const tasks = props.tasks;
    const settasks = props.settasks;
    const CompleteHandler = (index) => {
        console.log(index);
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        settasks(copyTasks);
        localStorage.setItem("tasks", JSON.stringify(copyTasks));
      };
    
      const DeleteHandler = (id) => {
        settasks(tasks.filter((t) => t.id !== id));
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks.filter((t) => t.id !== id))
        );
      };
    return (
        <div>
                      {tasks.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <li key={task.id} className="flex items-center py-2">
                  <div onClick={() => CompleteHandler(index)} className={`${task.completed ? "bg-green-600" : "border"} mr-4 rounded-full w-[30px] h-[30px]  border-yellow-500`}></div>
                  <div className="flex justify-between items-center w-full">
                    <span className={`${task.completed ? "line-through" : ""} text-lg font-semibold`}>{task.title}</span>
                    <div>
                      <button className="text-yellow-500 hover:text-yellow-600 focus:outline-none mr-2">
                        <RiEditFill />
                      </button>
                      <button onClick={() => DeleteHandler(task.id)} className="text-red-500 hover:text-red-600 focus:outline-none">
                        <RiCloseLargeLine />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
              No Pending Tasks
            </h1>
          )}
        </div>
    );
}

export default Show;

import { useState } from 'react';
import Header from './components/Header';
import Create from './components/Create';
import Show from './components/Show';

const TodoListUI = () => {
  const [tasks, settasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );






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
        <Header tasks={tasks} />
        <div className="max-w-md mx-auto p-4 bg-red-900 bg-opacity-90 text-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">To-Do List</h2>
          <Create tasks={tasks} settasks={settasks} />
          <Show tasks={tasks} settasks={settasks} />          
        </div>
      </div>
    </div>
  );
};

export default TodoListUI;

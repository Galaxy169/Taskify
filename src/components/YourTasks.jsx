import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const YourTasks = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  // Save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Add a new Todo
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(setTodo);
    saveToLocalStorage();
  };

  // Edit a Todo
  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage();
  };

  // Delete a Todo
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage();
  };

  // Mark Todo as Completed
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      console.log(id);
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocalStorage();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Hide Show Finished(marked as complete) Todo
  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col bg-slate-700 text-white md:w-1/2 w-full md:my-5 md:p-5 d md:h-auto h-[calc(90vh+20px)] md:mx-auto md:rounded-3xl md:shadow-lg shadow-black">
        <div className="header md:text-3xl text-xl mb-4 mt-2 p-2 hover:text-teal-100 md:hover:text-[31px] hover:text-[21px] transition-all duration-700 ease-out">
          <h1>Taskify - Create Your To Do List</h1>
        </div>
        <div className="bg-zinc-800 w-11/12 p-6 rounded-2xl mb-6 hover:shadow-custom shadow-custom2 transition-all duration-700">
          <div className="buttons flex flex-col gap-5 justify-center items-center">
            <h1 className="text-xl hover:text-teal-100 hover:text-[21px] transition-all duration-700 ease-out">Your Tasks</h1>

            <input className="border text-sm rounded-xl w-full p-3 bg-gray-600 border-teal-500 placeholder-gray-200 text-white" type="text" onChange={handleChange} value={todo} placeholder="Enter your Todo" />
            <button className="hover:text-lime-50 hover:bg-green-600 ease-in-out bg-green-500 py-2 px-8 mx-5 w-full disabled:bg-red-500 disabled:cursor-not-allowed rounded-2xl transition-all duration-700 cursor-pointer" onClick={handleAdd} disabled={todo.length < 3}>
              Add Your Todo
            </button>
            <div className="flex gap-2 items-center cursor-pointer">
              <input id="Finished" type="checkbox" checked={showFinished} onChange={toggleFinished} className="cursor-pointer border rounded-sm bg-gray-700 border-emerald-600" />
              <label htmlFor="Finished" className="cursor-pointer">
                Show Finished
              </label>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 w-11/12 h-[35vh] overflow-y-scroll rounded-2xl p-6 flex flex-col gap-3 hover:shadow-custom shadow-custom2 transition-all duration-700 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-900">
          {todos.length === 0 && <div>No Todos to display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div key={item.id} className="flex gap-7 justify-between ">
                  <div className="todo flex gap-3 items-center">
                    <input type="checkbox" name={item.id} id="" checked={item.isCompleted} onChange={handleCheckbox} className="border rounded-full bg-gray-700 border-emerald-600 cursor-pointer" />
                    <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  </div>
                  <div className="buttons flex gap-2.5">
                    <button
                      onClick={(e) => {
                        if (confirm(`Are you sure you wish to edit "${item.todo}"`)) handleEdit(e, item.id);
                      }}
                      className="">
                      <EditNoteIcon />
                    </button>
                    <button
                      onClick={(e) => {
                        if (confirm(`Are you sure you wish to delete ${item.todo}?`)) handleDelete(e, item.id);
                      }}>
                      <DeleteForeverIcon />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YourTasks;

import { useState } from "react";
import "./MainPage.css";
import { ToastNotify, notifySuccess } from "../Toasts/ToastNotify";

export const MainPage = () => {
  const [newTask, setNewTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleAdd = () => {
    if (!newTask.trim()) return;

    setAllTask([...allTask, newTask]);

    setNewTask("");
    notifySuccess("Task added sucessfully");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (Index) => {
    const modifiedTask = allTask.filter((_, i) => i !== Index);
    setAllTask(modifiedTask);
  };
  console.log(allTask);

  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <span className="mainHeaderName">Do It Now!</span>
        <span className="mainHeaderSubName">Get things done faster</span>
      </div>
      <div className="mainInputContainer">
        <input
          type="text"
          className="mainInput"
          id=""
          onKeyDown={handleKeyDown}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Hey! Add yout tasks here"
        />
        <button
          className="mainInputButton"
          onClick={handleAdd}
          disabled={!newTask.trim()}
        >
          OK
        </button>
      </div>
      <div className="maintaskContainer">
        {allTask.map((task, Index) => (
          <div className="mainListItems" key={Index}>
            <div className="mainTaskRow">
              <p className="mainTaskNames">{task} </p>
              <button
                className="mainDeleteButton"
                onClick={() => handleDelete(Index)}
              >
                Done
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastNotify />
    </div>
  );
};

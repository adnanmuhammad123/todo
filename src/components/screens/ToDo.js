import React, { useState } from "react";
import Delete from "../../assets/images/delete.svg";
import Undo from "../../assets/images/revert.svg";
import Tick from "../../assets/images/tick-green.svg";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy 1 kg Tomato", completed: false, index: 1 },
    { id: 2, text: "Buy 2 kg Onion", completed: false, index: 2 },
    { id: 3, text: "Visit Friend", completed: false, index: 3 },
    { id: 4, text: "Clean House", completed: false, index: 4 },
    { id: 5, text: "Clean House", completed: true, index: 5 },
    { id: 6, text: "Buy 1 kg Tomato", completed: true, index: 6 },
    { id: 7, text: "Buy 2 kg Onion", completed: true, index: 7 },
    { id: 8, text: "Visit Friend", completed: true, index: 8 },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      const newIndex = tasks.length + 1;
      setTasks([
        ...tasks,
        { id: newId, text: newTask, completed: false, index: newIndex },
      ]);
      setNewTask("");
    }
  };
  const handleToggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleRevertCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ fontSize: "50px", textAlign: "center" }}>Todo List</h2>

      <h3 style={{ fontSize: "25px" }}>Things to be done</h3>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
            >
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleCompletion(task.id)}
                  style={{ display: "none" }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid black",
                    marginRight: "10px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {task.completed && (
                    <span
                      style={{
                        position: "absolute",
                        top: "4px",
                        left: "4px",
                        width: "10px",
                        height: "10px",
                        backgroundColor: "black",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                </span>
                <span style={{ marginLeft: "10px" }}>
                  {task.index}. {task.text}
                </span>
              </label>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  color: "red",
                  border: "0",
                  backgroundColor: "white",
                }}
              >
                <img src={Delete} alt="" />
              </button>
            </li>
          ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Type new task..."
        style={{ height: "5vh", width: "300px", paddingLeft: "10px" }}
      />
      <button
        onClick={handleAddTask}
        style={{
          height: "48px",
          color: "white",
          backgroundColor: "#06003b",
          border: "0",
          borderRadius: "5px",
          width: "85px",
          fontSize: "15px",
          fontWeight: "700",
        }}
      >
        Add New
      </button>

      <h3 style={{ fontSize: "25px" }}>Completed</h3>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Tick}
                  alt=""
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                  }}
                />
                <span style={{ color: "#1fcb9d" }}>
                  {task.index}. {task.text}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleRevertCompletion(task.id)}
                  style={{
                    color: "blue",
                    border: "0",
                    backgroundColor: "white",
                  }}
                >
                  <img src={Undo} alt="" />
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  style={{
                    color: "red",
                    border: "0",
                    backgroundColor: "white",
                  }}
                >
                  <img src={Delete} alt="" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoApp;

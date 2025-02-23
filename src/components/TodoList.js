import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TextBox from "./TextBox";
import Rectangle from "./Rectangle";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [addingNewTask, setAddingNewTask] = useState(false);

  const titleStyle = {
    fontSize: "30px",
    position: "relative",
    display: "inline-block",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const todoListStyle = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "10px",
    borderRadius: "10px",
    alignItems: "center",
  };

  const addBtnStyle = {
    borderRadius: "25px",
    outline: "none",
    border: "none",
    backgroundColor: "white",
    padding: "10px",
  };

  const newTodoInputStyle = {
    backgroundColor: "transparent",
    border: "none",
  };

  function addTask(text) {
    if (text.trim() === "") {
      document.querySelector("#new-todo-input").classList.add("shake");
      setTimeout(() => {
        document.querySelector("#new-todo-input").classList.remove("shake");
      }, 500);
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask(text);
    }
  }

  function newTaskClick() {
    setAddingNewTask(true);
  }

  return (
    <div className="todo-list" style={todoListStyle}>
      <TextBox initialText="Todo List" style={titleStyle} />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      {addingNewTask === true ? (
        <input
          id="new-todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          style={newTodoInputStyle}
          autofocus
        />
      ) : (
        <div></div>
      )}
      <button onClick={newTaskClick} style={addBtnStyle}>
        + New Task
      </button>
    </div>
  );
}

export default TodoList;

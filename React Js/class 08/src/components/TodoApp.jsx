import React, { useState } from "react";
import styles from "./TodoApp.module.css";
import ButtonCmp from "./ButtonCmp";
import TextField from "./TextField";

const TodoApp = () => {
  // Input Feilds
  const [todoValue, setTodoValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");

  const [todos, setTodos] = useState([]);
  console.log("todos", todos);
  const addTodo = () => {
    // console.log("todoValue", todoValue);
    if (todoValue.length < 3) {
      alert("invalid value");
      return;
    }
    todos.unshift(todoValue);
    setTodos([...todos]);

    setTodoValue("");
  };

  const deleteAll = () => {
    console.log("deleteAll");
    setTodos([]);
  };

  const deleteTodo = (indexNumber) => {
    console.log("deleteTodo", indexNumber);
    todos.splice(indexNumber, 1);
    setTodos([...todos]);
  };

  const editTodo = (indexNumber) => {
    console.log(indexNumber);
    console.log("todo value", todos[indexNumber]);
    const editValue = prompt("Enter edit value", todos[indexNumber]);

    todos.splice(indexNumber, 1, editValue);
    setTodos([...todos]);
  };

  const [editIndexNumber, setEditIndexNumber] = useState(null);
  const editHandler = (indexNumber) => {
    setEditIndexNumber(indexNumber);
  };

  console.log("editIndexNumber", editIndexNumber);

  const saveHandler = (indexNumber) => {
    console.log("editInputValue", editInputValue);
    todos.splice(indexNumber, 1, editInputValue);
    setTodos([...todos]);
    setEditIndexNumber(null);
  };

  return (
    <div>
      <h1 className={styles.heading}>Todo App</h1>
      {/* header */}
      <div className={styles.header}>
        {/* <input
          type="text"
          placeholder="Todos..."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        /> */}
        <TextField
          placeholder="Enter todos..."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />

        {/* <button onClick={addTodo}>Add Todo..</button>
        <button>Delete All..</button> */}
        <ButtonCmp title="Add Todo" onClick={addTodo} />
        <ButtonCmp
          title={"Delete All"}
          style={{ backgroundColor: "red" }}
          onClick={deleteAll}
        />
      </div>

      {/* listing */}
      <div>
        <ul>
          {todos.map((value, index) => {
            console.log("value", value);
            return editIndexNumber === index ? (
              <div>
                <TextField
                  placeholder="Edit Value..."
                  onChange={(e) => setEditInputValue(e.target.value)}
                  value={editInputValue}
                />
                <ButtonCmp title={"Save"} onClick={() => saveHandler(index)} />
              </div>
            ) : (
              <li key={index}>
                {value}
                {/* <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button> */}
                {/* <ButtonCmp onClick={() => editTodo(index)} title="Edit" /> */}
                <ButtonCmp onClick={() => editHandler(index)} title="Edit" />
                <ButtonCmp
                  title="Delete"
                  style={{ backgroundColor: "red" }}
                  onClick={() => deleteTodo(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;

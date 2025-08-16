import React, { useState } from "react";

const App = () => {
  const [todoValue, setTodoValue] = useState("");
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

  const deleteTodo = (indexNumber) => {
    console.log("deleteTodo", indexNumber);
    todos.splice(indexNumber, 1);
    setTodos([...todos]);
  };

  const editTodo = (indexNumber) => {
    console.log(indexNumber);
    console.log("todo value", todos[indexNumber]);
    const editValue = prompt("Enter edit value", todos[indexNumber]);
    
    todos.splice(indexNumber , 1 , editValue)
    setTodos([...todos])
  
  };

  return (
    <div>
      <h1>Todo App</h1>
      {/* header */}
      <div>
        <input
          type="text"
          placeholder="Todos..."
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
        />
        <button onClick={addTodo}>Add Todo..</button>
        <button>Delete All..</button>
      </div>

      {/* listing */}
      <div>
        <ul>
          {todos.map((value, index) => {
            console.log("value", value);
            return (
              <li key={index}>
                {value} <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

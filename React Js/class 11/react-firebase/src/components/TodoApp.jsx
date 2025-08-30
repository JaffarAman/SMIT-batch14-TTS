import React, { useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import ButtonCmp from "./ButtonCmp";
import TextField from "./TextField";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

const TodoApp = () => {
  // Input Feilds
  const [todoValue, setTodoValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");

  let [todos, setTodos] = useState([]);
  console.log("todos", todos);
  const addTodo = async () => {
    // collection  ->  document id ->  document
    // todos  ->  doc id ->  {  value ,createdAt() timestamp }

    const res = await addDoc(collection(db, "todos"), {
      value: todoValue,
      createdAt: new Date(),
    });

    console.log("res", res);
    fetchData();

    // // console.log("todoValue", todoValue);
    // if (todoValue.length < 3) {
    //   alert("invalid value");
    //   return;
    // }
    // todos.unshift(todoValue);
    // setTodos([...todos]);

    // setTodoValue("");
  };

  const deleteAll = () => {
    console.log("deleteAll");
    setTodos([]);
  };

  const deleteTodo = async (id) => {
    console.log("id", id);
    await deleteDoc(doc(db, "todos", id));
    fetchData();
    // console.log("deleteTodo", indexNumber);
    // todos.splice(indexNumber, 1);
    // setTodos([...todos]);
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

  // console.log("editIndexNumber", editIndexNumber);

  const saveHandler = (indexNumber) => {
    console.log("editInputValue", editInputValue);
    todos.splice(indexNumber, 1, editInputValue);
    setTodos([...todos]);
    setEditIndexNumber(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // get todo data
      const querySnapShot = await getDocs(collection(db, "todos"));
      // console.log("response", querySnapShot);
      // todos = []
      const tempArr = [];
      querySnapShot.forEach((doc) => {
        console.log("doc", doc.data(), doc.id);
        tempArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      console.log("tempArr", tempArr);
      setTodos(tempArr);

      // setTodos([...todos]);
    } catch (error) {
      alert(error.message);
    }
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
          {todos.map((obj, index) => {
            console.log("obj", obj);
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
              <li key={obj.id}>
                {obj.value}
                {/* <button onClick={() => editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button> */}
                {/* <ButtonCmp onClick={() => editTodo(index)} title="Edit" /> */}
                <ButtonCmp onClick={() => editHandler(index)} title="Edit" />
                <ButtonCmp
                  title="Delete"
                  style={{ backgroundColor: "red" }}
                  onClick={() => deleteTodo(obj.id)}
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

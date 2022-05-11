import React, { useState } from "react";
import styles from "./addTodo.module.css";
import { v4 as uuidv4 } from "uuid";
console.log("привет, Вадим")
const AddTodo = ({ setTodos, todos }) => {
  let [todo, setTodo] = useState("");

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    if (todo === "") {
      alert("Введите задачу");
    } 
    else {
      const newTodo = {
        id: uuidv4(),
        text: todo,
        completed: false,
        date: new Date(),
      };
      setTodos([...todos, newTodo]);
      setTodo("");
      e.target.reset();
    }
    e.preventDefault();
  };

  return (
    <form className={styles.addTodo} onSubmit={addTodo}>
      <input
        className={styles.inputAddTodo}
        type="text"
        placeholder="add details"
        onChange={inputHandler}
      />
      <input className={styles.buttonAddTodo} type="submit" value="Add" />
    </form>
  );
};

export default AddTodo;

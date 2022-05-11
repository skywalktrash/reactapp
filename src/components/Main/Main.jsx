import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import AddTodo from "./AddTodo/AddTodo";
import Todos from "./Todos/Todos";
import Footer from "./Footer/Footer"

export default function Main() {
  let [todos, setTodos] = useState([]);

  return (
    <main>
      <Tabs />
      <AddTodo setTodos={setTodos} todos={todos} />
      <Todos todos={todos} />
    </main>
  );
}

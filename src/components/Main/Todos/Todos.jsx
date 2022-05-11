import React from "react";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          {todo.text} была созданаhgjhghjghj ss{todo.date.toLocaleString()}
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";

const GetTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://demo1-mvr0.onrender.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {todos.map((t) => (
        <div key={t._id}>
          {t.text}
        </div>
      ))}
    </div>
  );
};

export default GetTodo;
import { useState } from "react";

import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
  ]);

  const addTodoHandler = (todoText: string) => {
    const todo = new Todo(todoText);
    setTodos((previousState) => {
      return previousState.concat(todo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;

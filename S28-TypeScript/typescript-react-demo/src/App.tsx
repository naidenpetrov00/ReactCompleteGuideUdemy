import { useState } from "react";

import Todo from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
};

export default App;

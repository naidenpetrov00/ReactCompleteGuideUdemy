import { FC, useContext } from "react";

import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: FC = () => {
  const todosContext = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDeleteTodo={todosContext.removeTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;

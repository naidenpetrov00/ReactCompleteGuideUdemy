import { FC } from "react";

import styles from "./TodoItem.module.css";
import Todo from "../models/todo";

type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (todoId: number) => void;
};

const TodoItem: FC<TodoItemProps> = (props) => {
  console.log(props.todo);

  return (
    <li
      className={styles.item}
      onClick={() => props.onDeleteTodo(props.todo.id)}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;

import { FC } from "react";

const TodoItem: FC<{ todoText: string }> = (props) => {
  return <li>{props.todoText}</li>;
};

export default TodoItem;

import { FC, ReactNode, createContext, useState } from "react";
import Todo from "../models/todo";

export const TodosContext = createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: FC<{ children?: ReactNode }> = (props) => {
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

  const removeTodoHandler = (todoId: number) => {
    setTodos((previousState) => {
      return previousState.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider
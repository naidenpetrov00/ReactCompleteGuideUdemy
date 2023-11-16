import { FormEvent, FC, useRef } from "react";

import styles from "./NewTodo.module.css";

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="text">TodoText</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

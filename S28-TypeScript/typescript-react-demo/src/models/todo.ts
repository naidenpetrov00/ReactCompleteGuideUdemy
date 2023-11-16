class Todo {
  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random();
  }

  id: number;
  text: string;
}

export default Todo;

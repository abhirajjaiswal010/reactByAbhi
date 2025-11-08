import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="todo_input"
          autoComplete="off"
          value={inputValue.content}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button className="todo_btn" type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
};

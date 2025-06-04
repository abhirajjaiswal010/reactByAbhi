import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../components/todo.css";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
import { TodoDate } from "./todoDate";

export const Todo = () => {
  //& using state for store input in array
  const [task, setTask] = useState([]);
  //& for slide effect
  const [lastAdded, setLastAdded] = useState(null);
  const [isClearing, setIsClearing] = useState(false);
  //& change title
  useEffect(() => {
    document.title = `To-Do List (${task.length})`;
  }, [task]);
  //&handle input change for taking input

  //& handle form on submit

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    //? logic behind store input in setTask
    //? to check the input field is empty or not
    //? if input box is empty the do not store
    if (!content) return;
    // if (task.includes(inputValue)) {
    //   return;
    // } 
    //? if item is same then do not insert
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
    if (ifTodoContentMatched) return;

    setTask((prev) => [...prev, { id, content, checked }]);
    setLastAdded(inputValue);

    toast.success("Task Added");
    setTimeout(() => setLastAdded(null), 300);
  };

  (newTask) => {
    setTask([...task, newTask]);

    setLastAdded(newTask); // track the last added item
    setTimeout(() => setLastAdded(null), 300);
  };

  //& delete all button function

  const handleDeleteAll = () => {
    if (task.length === 0) {
      toast.error("Already deleted");
      return;
    }

    setIsClearing(true);
    setTimeout(() => {
      setTask([]);
      setIsClearing(false);
      toast.success("All Tasks Deleted");
    }, 200);
  };

  //& task delete btn

  const handleTaskDeleteBtn = (value) => {

    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
    toast.success("Tasks Deleted");
  };

  //& task complete btn
  const handleCheckBtn = (content) => {
  const updatedCheckedTask = task.map((curTask) => {
    if (curTask.content === content) {
      const newCheckedStatus = !curTask.checked;
     
       // Show toast depending on the new status
      newCheckedStatus
        ? toast.success("Task Completed")
        : toast.error("Task Unchecked");

      return {
        ...curTask,
        checked: !curTask.checked
      };
    } else {
      return curTask;
    }
  });
  setTask(updatedCheckedTask);
 
};

  return (
    <section className="todo_container">
      <header>
        <h1>to-do List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <Toaster position="bottom-center" />
      <section className="myTask">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                onHandleDeleteTodo={handleTaskDeleteBtn}
                lastAddedList={lastAdded}
                isClearingList={isClearing}
                checked={curTask.checked}
                onHandleCheckedTodo={handleCheckBtn}
              />
            );
          })}
        </ul>
      </section>

      <div className="deleteAllBtn_container">
        <button className="Del_all_btn" onClick={handleDeleteAll}>
          Delete All
        </button>
      </div>
    </section>
  );
};

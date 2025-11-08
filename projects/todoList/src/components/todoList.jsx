import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
export const TodoList = ({
  data,
  onHandleDeleteTodo,
  lastAddedList,
  isClearingList,
  checked,
  onHandleCheckedTodo,
}) => {
  return (
    <li
      className={`${data === lastAddedList ? "task-enter" : ""} ${
        isClearingList ? "fade-out" : ""
      }`}
    >
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      {/* task done btn */}
      <button className="check_btn" onClick={() => onHandleCheckedTodo(data)}>
        <LuBadgeCheck />
      </button>
      {/* task delete btn */}
      <button className="Delete_btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdOutlineDeleteOutline />
      </button>
    </li>
  );
};

const todosKey = "reactTodo";

export const TodoGetLocalStorage = () => {
  const rawTodos = localStorage.getItem(todosKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};
export const TodoSetLocalStorage = (task) => {
  return localStorage.setItem(todosKey, JSON.stringify(task));
};

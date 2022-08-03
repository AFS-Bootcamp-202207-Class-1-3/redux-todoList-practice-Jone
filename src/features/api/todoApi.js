import { api } from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const postTodo = (context) => {
  return api.post("/todos", context);
};

export const deleteTodo = (id) => {
  return api.delete(`/todos/${id}`);
};

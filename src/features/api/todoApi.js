import { api } from "./api";

export const getAllTodos = () => {
  return api.get("/todos");
};

export const saveTodo = (context) => {
  return api.post("/todos", context);
};

export const deleteTodo = (id) => {
  return api.delete(`/todos/${id}`);
};

export const toggleTodoStatus = (id, done) => {
  return api.put(`/todos/${id}`, done)
};

export const updateTodoContext = (id, context) => {
  return api.put(`/todos/${id}`, context)
};

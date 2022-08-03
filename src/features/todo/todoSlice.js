import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos(state, action) {
      state.todos = action.payload;
    },

    addTodo(state, action) {
      state.todos.push(action.payload);
    },

    onToggle(state, action) {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    },

    onDelete(state, action) {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },

    updateContext(state, action) {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, context: action.payload.context } : todo
        ),
      };
    },
  },
});

export const { addTodos, addTodo, onToggle, onDelete, updateContext } = todoSlice.actions;
export default todoSlice.reducer;

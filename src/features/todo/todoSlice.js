import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      context: "Learn Redux",
      done: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: uuidv4(),
        context: action.payload,
        done: false,
      });
    },

    onToggle(state, action) {
      state.todos[action.payload].done = !state.todos[action.payload].done;
    },

    onDelete(state, action) {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, onDelete, onToggle } = todoSlice.actions;
export default todoSlice.reducer;

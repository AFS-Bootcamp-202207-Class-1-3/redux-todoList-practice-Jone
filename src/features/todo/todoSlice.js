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
    
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index].context = action.payload.context;
   
    },
  },
});

export const { addTodos, addTodo, onToggle, onDelete, updateContext } = todoSlice.actions;
export default todoSlice.reducer;

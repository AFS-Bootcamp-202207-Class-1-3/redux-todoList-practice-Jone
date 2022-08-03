import { getTodos } from "../../../api/todoApi";

import TodoGenerator from "../TodoGenerator/TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos().then((response) => {
      dispatch(updateTodo(response.data));
    });
  }, [dispatch]);
  return (
    <div>
      <h1>TodoList</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}

export default TodoList;

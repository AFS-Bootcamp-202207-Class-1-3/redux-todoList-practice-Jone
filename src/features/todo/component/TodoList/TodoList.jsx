import { getAllTodos } from "../../../api/todoApi";

import TodoGenerator from "../TodoGenerator/TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllTodos().then((response) => {
      dispatch(addTodos(response.data));
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

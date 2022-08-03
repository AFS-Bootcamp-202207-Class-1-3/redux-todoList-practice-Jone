import TodoGenerator from "../TodoGenerator/TodoGenerator";
import TodoGroup from "../TodoGroup/TodoGroup";

function TodoList() {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
}

export default TodoList;
